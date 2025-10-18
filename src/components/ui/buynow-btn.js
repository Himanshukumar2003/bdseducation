"use client";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "@/lib/features/slice";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react"; // react icon import
import { useMutation } from "@tanstack/react-query";
import { addToCart } from "@/services/cart-services";

function BuyNowButton({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();

  // const handleBuyNow = () => {
  //   dispatch(addItem(product));
  //   dispatch(closeCart());
  // };

  //   const dispatch = useDispatch();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      // Optionally: use returned data to update Redux
      //   dispatch(addItem(data));
      dispatch(fetchCartItems());
      router.push("/checkout");
    },
    onError: (err, variables) => {
      handleError(err);
    },
    // onMutate: (data) => {
    //   dispatch(addItem({ data }));
    // },
  });

  const handleBuyNow = () => {
    mutate(product); // product should include id, name, price, etc.
  };

  return (
    <button className="btn " onClick={handleBuyNow}>
      <span className="flex items-center">
        BUY NOW
        <ArrowRight className="w-4 h-4 ml-2 inline" />
      </span>
    </button>
  );
}

export default BuyNowButton;
