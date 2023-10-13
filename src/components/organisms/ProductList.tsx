import { ProductListItem } from "@/components/molecules/ProductListItem";
import type { ProductsItemType } from "@/types";

export const ProductList = ({ products }: { products: ProductsItemType[] }) => {
  return (
    <ul
      data-testid="products-list"
      className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {products.map((product) => {
        return <ProductListItem product={product} key={product.id} />;
      })}
    </ul>
  );
};
