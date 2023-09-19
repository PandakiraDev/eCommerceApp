import { getProductsList } from "@/api/products";
import { Pagination } from "@/components/molecules/ProductListPagination";
import { ProductList } from "@/components/organisms/ProductList";

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

const ProductsPage = async () => {
  const pageNumber = "1";
  const products = (await getProductsList(pageNumber)).slice(0, 4);
  return (
    <>
      <ProductList products={products} />
      <Pagination pageNumber={pageNumber} />
    </>
  );
};
export default ProductsPage;
