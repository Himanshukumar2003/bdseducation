// components/CartButton.jsx or similar
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addItem,
  fetchCartItems,
  removeItem,
  toggleCart,
} from "@/lib/features/slice";
import { addToCart } from "@/services/cart-services";
import { handleError } from "@/lib/handle-error-toast";
import { Loader2, ShoppingCart } from "lucide-react";
import { useAuth } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";

const AddToCartButton = ({ product }) => {
  const { user } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      // Optionally: use returned data to update Redux
      //   dispatch(addItem(data));
      dispatch(fetchCartItems());
      dispatch(toggleCart());
    },
    onError: (err, variables) => {
      console.error("Error adding to cart:", err);

      handleError(err);
    },
    // onMutate: (data) => {
    //   dispatch(addItem({ data }));
    // },
  });

  const handleAddToCart = () => {
    if (!user) return router.push("/login");

    mutate(product); // product should include id, name, price, etc.
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isPending}
      className="w-12 h-12 bg-[var(--primary-700)] text-white rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg relative overflow-hidden group"
    >
      {isPending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <ShoppingCart className="w-5 h-5 relative z-10" />
          <div className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </>
      )}
    </button>
  );
};

export default AddToCartButton;

export const AddToCartButtonProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["cart-items"]);

      // Optionally: use returned data to update Redux
      //   dispatch(addItem(data));
      // dispatch(fetchCartItems());
      dispatch(toggleCart());
    },
    onError: (err, variables) => {
      console.log({ variables });
      console.error("Error adding to cart:", err);
      // Optionally show a toast or notification
      //   dispatch(removeItem(variables.id));
      handleError(err);
    },
    // onMutate: (data) => {
    //   dispatch(addItem({ data }));
    // },
  });

  const handleAddToCart = () => {
    if (!user) return router.push("/login");
    mutate(product); // product should include id, name, price, etc.
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isPending}
      className="btn outline-btn text-sm sm:text-base"
    >
      {isPending ? <Loader2 className="animate-spin" /> : "Add to cart"}
    </button>
  );
};
