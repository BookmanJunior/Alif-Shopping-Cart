import { Product } from "../../Types/Product";
import {
  addToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  removeFromCart,
} from "../../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface ProductButtons {
  product: Product;
  className?: string;
}

export default function ProductButtons({ product, className }: ProductButtons) {
  const dispatch = useAppDispatch();
  const isProductInCart = useAppSelector((state) =>
    state.cart.find((cartProduct) => cartProduct.id === product.id)
  );

  return isProductInCart === undefined ? (
    <button
      onClick={() => dispatch(addToCart(product))}
      className={`my-4 button ${className ? className : ""}`}
    >
      Add to Cart
    </button>
  ) : (
    <div className={`flex gap-4 px-4 py-2 my-4 ${className ? className : ""}`}>
      <button
        onClick={() => {
          if (isProductInCart.quantity === 1) {
            dispatch(removeFromCart(isProductInCart.id));
            return;
          }
          dispatch(decrementProductQuantity(isProductInCart.id));
        }}
        aria-label="decrement product quantity"
        className="hover:text-yellow-400"
      >
        -
      </button>
      <p>{isProductInCart.quantity}</p>
      <button
        onClick={() => dispatch(incrementProductQuantity(isProductInCart.id))}
        aria-label="increment product quantity"
        className="hover:text-yellow-400"
      >
        +
      </button>
    </div>
  );
}
