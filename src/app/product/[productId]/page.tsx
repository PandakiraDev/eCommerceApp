import type { Metadata } from "next";
import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@/components/organisms/SuggestedProducts";
import { formatMoney } from "@/utils";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

// export const generateStaticParams = async () => {
//   const products = await getProductsList();
//   return products
//     .map((product) => ({
//       productId: product.id,
//     }))
//     .slice(0, 2);
// };

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const product = (await getProductById(
    params.productId
  )) as ProductListItemFragmentFragment;
  return {
    title: `${product.name} - Sklep internetowy`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Sklep internetowy`,
      description: product.description,
    },
  };
};

export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = (await getProductById(
    params.productId
  )) as ProductListItemFragmentFragment;

  return (
    <>
      <article className="mt-5 mb-5">
        <div className="flex flex-row justify-between">
          <div className="w-3/6">
            <div className="p-3 ">
              <div className="text-center p-4 flex justify-center">
                <img
                  width={250}
                  // height={320}
                  alt={product.name}
                  src={product.images[0]?.url}
                  // className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="w-3/6">
            <div className="p-4 bg-slate-100 ">
              <div className="mt-4 mb-3">
                <span className="uppercase text-slate-400 text-sm">
                  {product.categories[0]?.name}
                </span>
                <h1 className="uppercase text-2xl">{product.name}</h1>
                <div className="flex flex-row items-center">
                  {formatMoney(product.price / 100)}
                </div>
              </div>
              <p className="text-sm">{product.description}</p>
              <div className="mt-4 items-center border-none ">
                <button className="uppercase mr-2 p-3 bg-orange-300 text-xl rounded hover:bg-orange-500 hover:cursor-pointer">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <aside className="text-center">
        <Suspense fallback={"Ładowanie..."}>
          <SuggestedProductsList productId={params.productId} />
        </Suspense>
      </aside>
    </>
  );
}
