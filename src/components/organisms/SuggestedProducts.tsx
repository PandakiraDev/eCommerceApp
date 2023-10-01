import { ProductList } from "./ProductList";

import { getSuggestedProductsByProductId } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async ({
  productId,
}: {
  productId: string;
}) => {
  const products = await getSuggestedProductsByProductId(productId);

  console.log("products =>", products[0]?.categories[0]?.products, productId);

  if (!products[0]?.categories[0]?.products) return null;

  await sleep(5000);
  return (
    <ProductList
      data-testid="related-products"
      products={products[0]?.categories[0].products}
    />
  );
};
