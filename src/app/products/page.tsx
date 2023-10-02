import { notFound } from "next/navigation";
import { getProductsList } from "@/api/products";
import { ActiveLink } from "@/components/atoms/ActiveLink";
// import { Pagination } from "@/components/molecules/ProductListPagination";
import { ProductList } from "@/components/organisms/ProductList";
import type { ProductListItemFragmentFragment } from "@/gql/graphql";

const ProductsPage = async () => {
  const pageNumber = "1";
  const products = (await getProductsList(pageNumber)).slice(
    0,
    4
  ) as ProductListItemFragmentFragment[];
  if (!products) {
    notFound();
  }
  return (
    <>
      <ProductList products={products} />
      <div className="flex justify-center">
        <ActiveLink
          href={`/products/1`}
          exact={true}
          className={"text-blue-400 hover:text-blue-600 text-2xl"}
          activeClassName={"underline"}
        >
          Show more
        </ActiveLink>
      </div>
      {/* <Pagination pageNumber={pageNumber} /> */}
    </>
  );
};
export default ProductsPage;
