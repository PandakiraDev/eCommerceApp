import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { executeGraphql } from "./graphqlApi";
import {
  CartGetByIdDocument,
  CartCreateDocument,
  ProductGetByProductIdDocument,
  CartAddProductDocument,
} from "@/gql/graphql";

export async function getOrCreateCart() {
  const existingCart = await getCartFromCookies();
  if (existingCart) {
    return existingCart;
  }
  const cart = await createCart();
  if (!cart.createOrder) {
    throw new Error("Failed to create cart");
  }
  cookies().set("cartId", cart.createOrder.id, {
    httpOnly: true,
    sameSite: "lax",
    // secure: true,
  });
  return cart.createOrder;
}

export async function getCartFromCookies() {
  const cartId = cookies().get("cartId")?.value;
  if (cartId) {
    const cart = await executeGraphql({
      query: CartGetByIdDocument,
      variables: { id: cartId },
      cache: "no-store",
      next: {
        tags: ["cart"],
      },
    });
    if (cart.order) {
      return cart.order;
    }
  }
}
export function createCart() {
  return executeGraphql({
    query: CartCreateDocument,
    cache: "no-store",
    variables: {},
  });
}
export async function addToCart(orderId: string, productId: string) {
  const { product } = await executeGraphql({
    query: ProductGetByProductIdDocument,
    variables: {
      productId: productId,
    },
    cache: "no-store",
  });
  if (!product) {
    throw new Error("Product not found");
  }

  await executeGraphql({
    query: CartAddProductDocument,
    variables: {
      orderId,
      productId,
      total: product.price,
    },
    cache: "no-store",
  });
}
export async function handlePaymentAction() {
  "use server";
  // console.log(process.env.STRIPE_SECRET_KEY);
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  const cart = await getCartFromCookies();

  if (!cart) {
    return;
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-08-16",
    typescript: true,
  });
  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "blik", "p24"],
    metadata: {
      cartId: cart.id,
    },
    line_items: cart.orderItems.map((item) => ({
      price_data: {
        currency: "pln",
        product_data: {
          name: item.product?.name || "",
        },
        unit_amount: item.product?.price || 0,
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url:
      "http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/cart/cancel",
  });
  if (!checkoutSession.url) {
    throw new Error("Something went wrong");
  }
  cookies().set("cartId", "");
  redirect(checkoutSession.url);
}
