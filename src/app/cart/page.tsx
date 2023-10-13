import { redirect } from "next/navigation";
import { IncrementProductQuantity } from "./IncrementProductQuantity";
import { RemoveButton } from "./RemoveButton";
import { getCartFromCookies, handlePaymentAction } from "@/api/cart";
import { formatMoney } from "@/utils";

// export const runtime = "edge";
// export const dynamic = "force-dynamic";
// export const dynamicParams = true;
// export const revalidate = 123;
// export const preferredRegion = "global";
// export const fetchCache = "force-cache";

export default async function CartPage() {
  const cart = await getCartFromCookies();
  console.log(cart);
  if (!cart) {
    redirect("/");
  }

  return (
    <div className="mt-10">
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Product</th>
            <th className="px-4">Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.orderItems.map(
            (item) =>
              item.product && (
                <tr key={item.id}>
                  <td>{item.product.name}</td>
                  <td className="text-center">
                    <IncrementProductQuantity
                      quantity={item.quantity}
                      itemId={item.id}
                    />
                  </td>
                  <td>{formatMoney(item.product.price / 100)}</td>
                  <td>
                    <RemoveButton itemId={item.id} />
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <form action={handlePaymentAction}>
        <button
          type="submit"
          className="border max-w-xs rounded-md py-4 hover:bg-slate-800 transition-colors shadow-sm mt-4 w-full text-white bg-slate-950 "
        >
          Pay
        </button>
      </form>
    </div>
  );
}
