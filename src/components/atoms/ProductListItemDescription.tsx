import { type ProductItemType } from "../types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
  product: ProductItemType;
};

export const ProductListItemDescription = ({
  product: { name, category, price },
}: ProductListItemDescriptionProps) => {
  return (
    <div className="mt-2 flex justify-between">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">
          <span className="sr-only">Category:</span> {category}
        </p>
      </div>
      <p className="text-sm font-medium text-gray-900">
        <span className="sr-only">Price:</span> {formatMoney(price / 100)}
      </p>
    </div>
  );
};
