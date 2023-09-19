import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
  const pageNumber = "1";
  const products = await getProductsList(pageNumber);
  await sleep(5000);
  return <ProductList products={products.slice(-4)} />;
};
