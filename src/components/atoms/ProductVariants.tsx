import Link from "next/link";
import type { ProductItemDetailsType } from "@/types";

type Props = {
  product: ProductItemDetailsType;
  searchParams: {
    variantId?: string;
    skuId?: string;
  };
};

export const ProductVariants = ({ product, searchParams }: Props) => {
  const selectedVariantIdFromParams =
    searchParams?.variantId ?? product.variants[0]?.id;
  const selectedSkuIdFromParams =
    searchParams?.skuId ?? product.variants[0]?.skus[0]?.id;

  const selectedVariant = product.variants.find(
    (variant) => variant.id === selectedVariantIdFromParams
  );

  return (
    <>
      {product.variants.map((variant) => {
        return (
          <div key={variant.id}>
            <Link
              scroll={false}
              href={`?variantId=${encodeURIComponent(variant.id)}`}
              className={`${
                selectedVariantIdFromParams === variant.id
                  ? "text-orange-300"
                  : ""
              }`}
            >
              {variant.color}
            </Link>
          </div>
        );
      })}

      {selectedVariant
        ? selectedVariant.skus.map((sku) => (
            <div key={sku.id}>
              <Link
                href={`?variantId=${encodeURIComponent(
                  selectedVariant.id
                )}&skuId=${encodeURIComponent(sku.id)}`}
                className={`${
                  selectedSkuIdFromParams === sku.id ? "text-orange-300" : ""
                }`}
              >
                {sku.size}
              </Link>
            </div>
          ))
        : null}
    </>
  );
};
