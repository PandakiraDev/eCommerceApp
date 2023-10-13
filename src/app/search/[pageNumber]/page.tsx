import { notFound } from "next/navigation";
import { getProductBySearch } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";
// import { Pagination } from "@/components/molecules/ProductListPagination";

type Props = {
  params: {
    pageNumber: string;
  };
  searchParams: {
    query?: string;
  };
};

const SearchedProductsPage = async ({
  params: { pageNumber },
  searchParams,
}: Props) => {
  console.log(searchParams);
  const products = await getProductBySearch(
    pageNumber,
    searchParams.query ? searchParams.query : ""
  );

  console.log(searchParams.query);
  if (!products) {
    notFound();
  }
  return (
    <>
      <ProductList products={products} />
      {/* <Pagination pageNumber={pageNumber} /> */}
    </>
  );
};
export default SearchedProductsPage;

// export const generateStaticParams = async () => {
//   const productsTotalCount = await getTotalCountOfProducts();
//   const pages = Math.ceil(productsTotalCount / 5);
//   return Array.from({ length: pages }).map((_, index) => ({
//     pageNumber: String(index + 1),
//   }));
// };
