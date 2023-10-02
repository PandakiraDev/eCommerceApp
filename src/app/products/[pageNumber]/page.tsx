import { notFound } from "next/navigation";
import { getProductsList, getTotalCountOfProducts } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";
import { Pagination } from "@/components/molecules/ProductListPagination";
import type { ProductListItemFragmentFragment } from "@/gql/graphql";

// const products: ProductItemType[] = [
//   {
//     id: "1",
//     category: "Electronics",
//     name: "Iphone",
//     price: 200000,
//     coverImage: {
//       alt: "Phone",
//       src: "/product_1.jpg",
//     },
//   },
//   {
//     id: "2",
//     category: "Clothes",
//     name: "Shirt",
//     price: 10500,
//     coverImage: {
//       alt: "Shirt",
//       src: "/product_2.jpg",
//     },
//   },
//   {
//     id: "3",
//     category: "Clothes",
//     name: "Shirt",
//     price: 12500,
//     coverImage: {
//       alt: "Shirt",
//       src: "/product_3.jpg",
//     },
//   },
//   {
//     id: "4",
//     category: "Shoes",
//     name: "New Balance",
//     price: 24000,
//     coverImage: {
//       alt: "Shoes",
//       src: "/product_4.jpg",
//     },
//   },
// ];

type Props = {
  params: {
    pageNumber: string;
  };
};

const ProductsPage = async ({ params: { pageNumber } }: Props) => {
  const products = (await getProductsList(
    pageNumber
  )) as ProductListItemFragmentFragment[];
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
