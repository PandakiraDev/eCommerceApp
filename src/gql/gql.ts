/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductGetByProductId($productId: ID!) {\n  product(where: {id: $productId}) {\n    ...ProductListItemFragment\n  }\n}": types.ProductGetByProductIdDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  variants {\n    ... on ProductSizeColorVariant {\n      id\n      name\n      color\n      size\n    }\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionsSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetByCollectionsSlugDocument,
    "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItemFragment\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
    "query SuggestedProductsGetByProductId($productId: ID!) {\n  products(where: {id: $productId}) {\n    name\n    categories {\n      slug\n      products(where: {NOT: {id: $productId}}, first: 4) {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}": types.SuggestedProductsGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByProductId($productId: ID!) {\n  product(where: {id: $productId}) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductGetByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  variants {\n    ... on ProductSizeColorVariant {\n      id\n      name\n      color\n      size\n    }\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionsSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionsSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItemFragment\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsGetByProductId($productId: ID!) {\n  products(where: {id: $productId}) {\n    name\n    categories {\n      slug\n      products(where: {NOT: {id: $productId}}, first: 4) {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}"): typeof import('./graphql').SuggestedProductsGetByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
