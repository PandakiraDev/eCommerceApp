"use client";

import { v4 as uuidv4 } from "uuid";
import { createReviewAction } from "@/app/product/[productId]/actions";

// import { handleReviewAddAction } from "@/app/product/[productId]/actions";
// const resetForm = () => {};

type Props = {
  productId: string;
  updateReviews: //   action:
  //     | ReviewItemType[]
  //     | ((pendingState: ReviewItemType[]) => ReviewItemType[])
  // ) => void;
  (
    action:
      | {
          id: string;
          name: string;
          headline: string;
          content: string;
          rating?: number | null | undefined;
        }[]
      | ((
          pendingState: {
            id: string;
            name: string;
            headline: string;
            content: string;
            rating?: number | null | undefined;
          }[]
        ) => {
          id: string;
          name: string;
          headline: string;
          content: string;
          rating?: number | null | undefined;
        }[])
  ) => void;
};

export const ReviewAddForm = ({ productId, updateReviews }: Props) => {
  return (
    <form
      data-testid="add-review-form"
      action={async (e) => {
        const dataToCreateReview = {
          headline: e.get("floating_headline") as string,
          name: e.get("floating_name") as string,
          email: e.get("floating_email") as string,
          content: e.get("floating_content") as string,
          rating: parseInt(e.get("floating_rating") as string),
          productId: productId,
        };

        updateReviews((prev) => {
          return [{ ...dataToCreateReview, id: uuidv4() }, ...prev];
        });

        await createReviewAction(dataToCreateReview);
      }}
    >
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_headline"
          id="floating_headline"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_headline"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Headline
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_content"
          id="floating_content"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_content"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Content
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_name"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="floating_rating"
            id="floating_rating"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            max={5}
            min={1}
          />
          <label
            htmlFor="floating_rating"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Rating (1-5)
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Add review
      </button>
    </form>
  );
};
