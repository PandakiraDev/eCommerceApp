import type { ProductListItemFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
  product: ProductListItemFragmentFragment;
};

export const ProductListItemDescription = ({
  product: { name, categories, price },
}: ProductListItemDescriptionProps) => {
  return (
    <div className="mt-2 flex justify-between">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
        {categories[0] && (
          <p className="text-sm text-gray-500">
            <span className="sr-only">Category:</span> {categories[0].name}
          </p>
        )}
      </div>
      <p className="text-sm font-medium text-gray-900">
        <span className="sr-only">Price:</span> {formatMoney(price / 100)}
      </p>
    </div>
  );
};
