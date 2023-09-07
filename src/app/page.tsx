import { ProductList } from "@/components/organisms/ProductList";
import { type ProductItemType } from "@/components/types";

const products: ProductItemType[] = [
  {
    id: "1",
    category: "Electronics",
    name: "Iphone",
    price: 200000,
    coverImage: {
      alt: "Phone",
      src: "/product_1.jpg",
    },
  },
  {
    id: "2",
    category: "Clothes",
    name: "Shirt",
    price: 10500,
    coverImage: {
      alt: "Shirt",
      src: "/product_2.jpg",
    },
  },
  {
    id: "3",
    category: "Clothes",
    name: "Shirt",
    price: 12500,
    coverImage: {
      alt: "Shirt",
      src: "/product_3.jpg",
    },
  },
  {
    id: "4",
    category: "Shoes",
    name: "New Balance",
    price: 24000,
    coverImage: {
      alt: "Shoes",
      src: "/product_4.jpg",
    },
  },
];

const Home = () => {
  return (
    <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
      <ProductList products={products} />
    </section>
  );
};
export default Home;
