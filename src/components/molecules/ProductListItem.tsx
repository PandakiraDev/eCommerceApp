import Link from "next/link";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/components/atoms/ProductListItemDescription";
import type { ProductsItemType } from "@/types";

type ProductListItemProps = {
  product: ProductsItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article>
          {product.images[0] && (
            <ProductCoverImage
              src={product.images[0].url}
              alt=""
              //   src={product.coverImage.src}
              //   alt={product.coverImage.alt}
            />
          )}
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};
