import { executeGraphql } from "./graphqlApi";
import {
  type ProductListItemFragmentFragment,
  ProductsGetByCategorySlugDocument,
  ProductsGetListDocument,
  ProductGetByProductIdDocument,
  ProductsGetByCollectionsSlugDocument,
  SuggestedProductsGetByProductIdDocument,
} from "@/gql/graphql";

export const getProductsList = async (pageNumber: string) => {
  const take = 5;
  const offset = (Number(pageNumber) - 1) * take;
  // 1*20 - 20 = 0 (page 1)
  // 2*20 - 20 = 20 (page 2)

  const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
    first: take,
    skip: offset,
  });

  return graphqlResponse.products;
};

export const getProductByCategorySlug = async (categoryName: string) => {
  const graphqlResponse = await executeGraphql(
    ProductsGetByCategorySlugDocument,
    {
      slug: categoryName,
    }
  );
  console.log(graphqlResponse);
  return graphqlResponse.categories[0]?.products;
};

export const getProductById = async (
  id: ProductListItemFragmentFragment["id"]
) => {
  const graphqlResponse = await executeGraphql(ProductGetByProductIdDocument, {
    productId: id,
  });
  return graphqlResponse.product;
};

export const getProductsByCollectionSlug = async (collectionName: string) => {
  const graphqlResponse = await executeGraphql(
    ProductsGetByCollectionsSlugDocument,
    {
      slug: collectionName,
    }
  );
  return graphqlResponse.collections[0]?.products;
};

export const getTotalCountOfProducts = async (): Promise<number> => {
  const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
  return graphqlResponse.productsConnection.aggregate.count;
};

export const getSuggestedProductsByProductId = async (
  id: ProductListItemFragmentFragment["id"]
) => {
  const graphqlResponse = await executeGraphql(
    SuggestedProductsGetByProductIdDocument,
    {
      productId: id,
    }
  );
  console.log(graphqlResponse.products);
  return graphqlResponse.products;
};
// export const getProductsCountRecursive = async (
//   offset: number = 0,
//   totalProducts: number = 0
// ): Promise<number> => {
//   const take = 700;

//   try {
//     const res = await fetch(
//       `https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`
//     );
//     const productsResponse = (await res.json()) as ProductResponseItem[];

//     const newTotalProducts = totalProducts + productsResponse.length;

//     if (productsResponse.length < take) {
//       // Brak więcej stron, zwróć obecny wynik
//       return newTotalProducts;
//     } else {
//       // Masz więcej stron do przejścia, zwiększ offset
//       return await getProductsCountRecursive(offset + take, newTotalProducts);
//     }
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     throw err;
//   }
// };
