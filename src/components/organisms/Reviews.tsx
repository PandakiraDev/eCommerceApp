"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { ReviewAddForm } from "../molecules/ReviewAddForm";
import { ReviewList } from "./ReviewList";
import { type ProductItemType } from "@/types";

export const Reviews = ({ product }: { product: ProductItemType }) => {
  const [optimisticReviews, setOptimisticReviews] = useOptimistic(
    product.reviews
  );

  if (product.reviews.length === 0) {
    return <div>There is 0 reviews for this product</div>;
  }

  return (
    <>
      <div>
        <h3 className="mt-6 font-bold mb-3">Add review:</h3>
        <ReviewAddForm
          productId={product.id}
          updateReviews={setOptimisticReviews}
        />
      </div>
      <div className="mt-6 font-bold">
        {product.reviews.length === 0 ? (
          <span>There is 0 reviews for this product</span>
        ) : (
          <h3 className="my-3">Reviews: </h3>
        )}
        {product.reviews.length === 0 ? null : (
          <ReviewList reviews={optimisticReviews} />
        )}
      </div>
    </>
  );
};
