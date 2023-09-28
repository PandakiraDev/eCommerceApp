import { notFound } from "next/navigation";
import { ProductList } from "@/components/organisms/ProductList";
import { getProductsByCollectionSlug } from "@/api/products";
import type { ProductListItemFragmentFragment } from "@/gql/graphql";

const CollectionsPage = async ({
  params,
}: {
  params: { collectionName: string };
}) => {
  const products = (await getProductsByCollectionSlug(
    params.collectionName
  )) as ProductListItemFragmentFragment[];

  if (!products) {
    throw notFound();
  }

  return (
    <>
      <h1 className="mb-8">
        Kolekcja:{" "}
        <span className="text-xl font-bold capitalize">
          {params.collectionName}
        </span>
      </h1>
      <ProductList products={products} />
    </>
  );
};

export default CollectionsPage;