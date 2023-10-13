"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
  const formStatus = useFormStatus();

  return (
    <button
      data-testid="add-to-cart-button"
      type="submit"
      disabled={formStatus.pending}
      className="uppercase mr-2 p-3 disabled:bg-slate-400 bg-orange-300 text-xl rounded hover:bg-orange-500 hover:cursor-pointer hover:shadow-md transition-shadow disabled:cursor-not-allowed"
    >
      Add to cart
    </button>
  );
};
