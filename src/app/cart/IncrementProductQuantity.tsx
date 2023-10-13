"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "./actions";

export const IncrementProductQuantity = ({
  quantity,
  itemId,
}: {
  quantity: number;
  itemId: string;
}) => {
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
  return (
    <form>
      <button
        data-testid="decrement"
        className="border bg-slate-50"
        formAction={async () => {
          setOptimisticQuantity(optimisticQuantity - 1);
          await changeItemQuantity(itemId, optimisticQuantity - 1);
        }}
      >
        -
      </button>
      <span data-testid="quantity">{optimisticQuantity}</span>
      <button
        data-testid="increment"
        className="border bg-slate-50"
        formAction={async () => {
          setOptimisticQuantity(optimisticQuantity + 1);
          await changeItemQuantity(itemId, optimisticQuantity + 1);
        }}
      >
        +
      </button>
    </form>
  );
};
