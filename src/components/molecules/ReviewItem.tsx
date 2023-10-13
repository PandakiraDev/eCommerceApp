import { type ReviewItemType } from "@/types";

type ProductListItemProps = {
  review: ReviewItemType;
};

export const ReviewItem = ({ review }: ProductListItemProps) => {
  // const _reviewRatingExist = review[0]?.rating;
  return (
    <li className="border border-black rounded-md p-2 m-2">
      <article>
        <div className="flex items-center  space-x-4">
          <div className="space-y-1 font-medium ">
            <p>Name: {review.name}</p>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <span>Rate: {review.rating}</span>
        </div>
        <div>
          <h3 className="ml-2 text-sm font-semibold text-gray-900 ">
            {review.headline}
          </h3>
        </div>
        <p className="ml-2 mb-2 text-gray-500 ">{review.content}</p>
      </article>
    </li>
  );
};
