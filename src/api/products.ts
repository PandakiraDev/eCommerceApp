import type { ProductItemType } from "@/components/types";

type ProductResponseItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
};

export const getProductsList = async (pageNumber: string) => {
  const take = 20;
  const offset = (Number(pageNumber) - 1) * take;
  // 1*20 - 20 = 0 (page 1)
  // 2*20 - 20 = 20 (page 2)
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`
  );
  const productsResponse = (await res.json()) as ProductResponseItem[];
  const products = productsResponse.map(productResponseItemToProductItemType);
  return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${id}`
  );
  const productResponse = (await res.json()) as ProductResponseItem;
  return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
  product: ProductResponseItem
): ProductItemType => {
  return {
    id: product.id,
    name: product.title,
    category: product.category,
    price: product.price,
    coverImage: {
      alt: product.title,
      src: product.image,
    },
    description: product.description,
  };
};

export const getProductsCountRecursive = async (
  offset: number = 0,
  totalProducts: number = 0
): Promise<number> => {
  const take = 700;

  try {
    const res = await fetch(
      `https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`
    );
    const productsResponse = (await res.json()) as ProductResponseItem[];

    const newTotalProducts = totalProducts + productsResponse.length;

    if (productsResponse.length < take) {
      // Brak więcej stron, zwróć obecny wynik
      return newTotalProducts;
    } else {
      // Masz więcej stron do przejścia, zwiększ offset
      return await getProductsCountRecursive(offset + take, newTotalProducts);
    }
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};
