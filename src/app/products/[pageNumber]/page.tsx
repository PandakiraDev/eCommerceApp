import { notFound } from "next/navigation";
import { getProductsList, getTotalCountOfProducts } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";
import { Pagination } from "@/components/molecules/ProductListPagination";

type Props = {
  params: {
    pageNumber: string;
  };
};

const ProductsPage = async ({ params: { pageNumber } }: Props) => {
  // await new Promise((_, reject) => setTimeout(reject, 5000));
  const products = await getProductsList(pageNumber);
  // console.log(pageNumber);

  if (!products) {
    notFound();
  }
  return (
    <>
      <ProductList products={products} />
      <Pagination pageNumber={pageNumber} />
    </>
  );
};
export default ProductsPage;

export const generateStaticParams = async () => {
  const productsTotalCount = await getTotalCountOfProducts();
  const pages = Math.ceil(productsTotalCount / 5);
  return Array.from({ length: pages }).map((_, index) => ({
    pageNumber: String(index + 1),
  }));
};
