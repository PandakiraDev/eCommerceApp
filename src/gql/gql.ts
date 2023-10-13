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
    "mutation CartAddProduct($orderId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0, email: \"konrad@wp.pl\", stripeCheckoutId: \"123\"}) {\n    id\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        id\n        name\n        price\n      }\n    }\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        id\n        name\n        price\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    quantity\n  }\n}": types.CartSetProductQuantityDocument,
    "query ProductGetByProductId($productId: ID!) {\n  product(where: {id: $productId}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      id\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n    variants {\n      id\n      color\n      skus {\n        id\n        size\n        inStock\n      }\n    }\n    reviews {\n      id\n      name\n      headline\n      content\n      rating\n    }\n  }\n}": types.ProductGetByProductIdDocument,
    "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      id\n      name\n      description\n      categories(first: 1) {\n        name\n        id\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionsSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products(first: 10) {\n      id\n      name\n      description\n      categories(first: 1) {\n        name\n        id\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}": types.ProductsGetByCollectionsSlugDocument,
    "query ProductsGetBySearch($first: Int, $skip: Int, $nameContains: String) {\n  products(first: $first, skip: $skip, where: {name_contains: $nameContains}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n      id\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetBySearchDocument,
    "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n      id\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
    "mutation ReviewCreate($headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!, $productId: ID!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $productId}}}\n  ) {\n    id\n    headline\n    name\n    email\n    content\n    rating\n  }\n}": types.ReviewCreateDocument,
    "query ReviewGetByProductID($productId: ID!) {\n  product(where: {id: $productId}) {\n    reviews {\n      id\n      name\n      headline\n      content\n      rating\n    }\n  }\n}": types.ReviewGetByProductIdDocument,
    "mutation ReviewPublish($newReviewId: ID!) {\n  publishReview(where: {id: $newReviewId}, to: PUBLISHED) {\n    id\n  }\n}": types.ReviewPublishDocument,
    "query SuggestedProductsGetByProductId($productId: ID!) {\n  products(where: {id: $productId}) {\n    name\n    categories {\n      slug\n      id\n      products(where: {NOT: {id: $productId}}, first: 4) {\n        id\n        name\n        description\n        categories(first: 1) {\n          name\n          id\n        }\n        images(first: 1) {\n          url\n        }\n        price\n      }\n    }\n  }\n}": types.SuggestedProductsGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0, email: \"konrad@wp.pl\", stripeCheckoutId: \"123\"}) {\n    id\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        id\n        name\n        price\n      }\n    }\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        id\n        name\n        price\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    quantity\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByProductId($productId: ID!) {\n  product(where: {id: $productId}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      id\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n    variants {\n      id\n      color\n      skus {\n        id\n        size\n        inStock\n      }\n    }\n    reviews {\n      id\n      name\n      headline\n      content\n      rating\n    }\n  }\n}"): typeof import('./graphql').ProductGetByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      id\n      name\n      description\n      categories(first: 1) {\n        name\n        id\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionsSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products(first: 10) {\n      id\n      name\n      description\n      categories(first: 1) {\n        name\n        id\n      }\n      images(first: 1) {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionsSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearch($first: Int, $skip: Int, $nameContains: String) {\n  products(first: $first, skip: $skip, where: {name_contains: $nameContains}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n      id\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n      id\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($headline: String!, $name: String!, $email: String!, $content: String!, $rating: Int!, $productId: ID!) {\n  createReview(\n    data: {headline: $headline, name: $name, email: $email, content: $content, rating: $rating, product: {connect: {id: $productId}}}\n  ) {\n    id\n    headline\n    name\n    email\n    content\n    rating\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewGetByProductID($productId: ID!) {\n  product(where: {id: $productId}) {\n    reviews {\n      id\n      name\n      headline\n      content\n      rating\n    }\n  }\n}"): typeof import('./graphql').ReviewGetByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewPublish($newReviewId: ID!) {\n  publishReview(where: {id: $newReviewId}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').ReviewPublishDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsGetByProductId($productId: ID!) {\n  products(where: {id: $productId}) {\n    name\n    categories {\n      slug\n      id\n      products(where: {NOT: {id: $productId}}, first: 4) {\n        id\n        name\n        description\n        categories(first: 1) {\n          name\n          id\n        }\n        images(first: 1) {\n          url\n        }\n        price\n      }\n    }\n  }\n}"): typeof import('./graphql').SuggestedProductsGetByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
