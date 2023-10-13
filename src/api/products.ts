import { executeGraphql } from "./graphqlApi";
import { type ProductItemType } from "@/types";
import {
  ProductsGetByCategorySlugDocument,
  ProductsGetListDocument,
  ProductGetByProductIdDocument,
  ProductsGetByCollectionsSlugDocument,
  SuggestedProductsGetByProductIdDocument,
  ProductsGetBySearchDocument,
} from "@/gql/graphql";

export const getProductsList = async (pageNumber: string, query?: string) => {
  const take = 5;
  const offset = (Number(pageNumber) - 1) * take;
  console.log(offset);
  console.log(take);
  console.log(pageNumber);
  console.log(query);
  // 1*20 - 20 = 0 (page 1)
  // 2*20 - 20 = 20 (page 2)

  const graphqlResponse = await executeGraphql({
    query: ProductsGetListDocument,
    variables: {
      first: take,
      skip: offset,
      // ...(query && { nameContains: query }),
    },
    next: {
      revalidate: 15,
    },
  });

  console.log(graphqlResponse);

  return graphqlResponse.products;
};

export const getProductBySearch = async (pageNumber: string, query: string) => {
  const take = 5;
  const offset = (Number(pageNumber) - 1) * take;
  console.log(offset);
  console.log(take);
  console.log(pageNumber);
  console.log(query);
  // 1*20 - 20 = 0 (page 1)
  // 2*20 - 20 = 20 (page 2)

  const graphqlResponse = await executeGraphql({
    query: ProductsGetBySearchDocument,
    variables: {
      first: take,
      skip: offset,
      nameContains: query,
    },
  });

  console.log(graphqlResponse);

  return graphqlResponse.products;
};

export const getProductByCategorySlug = async (categoryName: string) => {
  const graphqlResponse = await executeGraphql({
    query: ProductsGetByCategorySlugDocument,
    variables: {
      slug: categoryName,
    },
  });
  console.log(graphqlResponse);
  return graphqlResponse.categories[0]?.products;
};

export const getProductById = async (id: ProductItemType["id"]) => {
  const graphqlResponse = await executeGraphql({
    query: ProductGetByProductIdDocument,
    variables: {
      productId: id,
    },
    next: {
      revalidate: 1,
    },
  });
  return graphqlResponse.product;
};

export const getProductsByCollectionSlug = async (collectionName: string) => {
  const graphqlResponse = await executeGraphql({
    query: ProductsGetByCollectionsSlugDocument,
    variables: {
      slug: collectionName,
    },
  });
  return graphqlResponse.collections[0]?.products;
};

export const getTotalCountOfProducts = async (): Promise<number> => {
  const graphqlResponse = await executeGraphql({
    query: ProductsGetListDocument,
    variables: {},
  });
  return graphqlResponse.productsConnection.aggregate.count;
};

export const getSuggestedProductsByProductId = async (
  id: ProductItemType["id"]
) => {
  const graphqlResponse = await executeGraphql({
    query: SuggestedProductsGetByProductIdDocument,
    variables: {
      productId: id,
    },
  });
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
