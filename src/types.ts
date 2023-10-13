export type ProductItemDetailsType = ProductItemType & {
  variants: {
    id: string;
    color: string;
    skus: { id: string; size: string; inStock?: boolean | null | undefined }[];
  }[];
};

export type ProductItemType = {
  id: string;
  categories: { name: string; id: string }[];
  name: string;
  price: number;
  images: {
    url: string;
  }[];
  description: string;
  reviews: ReviewItemType[];
};

export type ProductsItemType = {
  id: string;
  categories: { name: string; id: string }[];
  name: string;
  price: number;
  images: {
    url: string;
  }[];
  description: string;
};

// export type ReviewItemAndProductItemType = ProductItemType & {
//   reviews: {
//     id: string;
//     name: string;
//     headline: string;
//     content: string;
//     rating?: number | null | undefined;
//   }[];
// };

export type ReviewItemType = {
  id: string;
  name: string;
  headline: string;
  content: string;
  rating?: number | null | undefined;
};

// export type CartItemType = {
//   id: string;
// };
