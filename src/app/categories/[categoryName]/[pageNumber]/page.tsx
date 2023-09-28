import { notFound } from "next/navigation";

import { ProductList } from "@/components/organisms/ProductList";

import { getProductByCategorySlug } from "@/api/products";
import type { ProductListItemFragmentFragment } from "@/gql/graphql";

const CategoryPage = async ({
  params,
}: {
  params: { categoryName: string; pageNumber: string };
}) => {
  const products = (await getProductByCategorySlug(
    params.categoryName
  )) as ProductListItemFragmentFragment[];

  if (!products) {
    throw notFound();
  }

  return (
    <>
      <h1 className="mb-8">
        Kategoria:{" "}
        <span className="text-xl font-bold capitalize">
          {params.categoryName}
        </span>
      </h1>
      <ProductList products={products} />
    </>
  );
};

export default CategoryPage;
