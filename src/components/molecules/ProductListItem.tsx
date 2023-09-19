import Link from "next/navigation";
import { type ProductItemType } from "../types";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/components/atoms/ProductListItemDescription";

type ProductListItemProps = {
  product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article>
          <ProductCoverImage
            {...product.coverImage}
            //   src={product.coverImage.src}
            //   alt={product.coverImage.alt}
          />
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};
