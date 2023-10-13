"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { ReviewCreateDocument, ReviewPublishDocument } from "@/gql/graphql";
type DataToCreateReview = {
  headline: string;
  name: string;
  email: string;
  content: string;
  rating: number;
  productId: string;
};

export const createReviewAction = async (
  dataToCreateReview: DataToCreateReview
) => {
  const newReview = await executeGraphql({
    query: ReviewCreateDocument,
    variables: dataToCreateReview,
  });

  console.log(newReview.createReview);
  if (!newReview.createReview) {
    throw new Error();
  }
  await executeGraphql({
    query: ReviewPublishDocument,
    variables: {
      newReviewId: newReview.createReview.id,
    },
  });
};
