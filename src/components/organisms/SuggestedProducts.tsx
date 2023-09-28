import { ProductList } from "./ProductList";
import { ProductListItemFragmentFragment } from "@/gql/graphql";

import { getSuggestedProductsByProductId } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async ({
  productId,
}: {
  productId: string;
}) => {
  const products = await getSuggestedProductsByProductId(productId);

  await sleep(5000);
  return <ProductList data-testid="related-products" products={products} />;
};
