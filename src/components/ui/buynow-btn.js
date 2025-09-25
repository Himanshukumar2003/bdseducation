"use client";
import { useDispatch } from "react-redux";
import { addItem, closeCart } from "@/lib/features/slice";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react"; // react icon import

function BuyNowButton({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBuyNow = () => {
    dispatch(addItem(product));
    dispatch(closeCart());
    router.push("/checkout");
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
