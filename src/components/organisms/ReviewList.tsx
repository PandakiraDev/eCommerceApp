import { ReviewItem } from "../molecules/ReviewItem";
import { type ReviewItemType } from "@/types";

export const ReviewList = ({ reviews }: { reviews: ReviewItemType[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {reviews.map((review) => {
        return <ReviewItem review={review} key={review.id} />;
      })}
    </ul>
  );
};
