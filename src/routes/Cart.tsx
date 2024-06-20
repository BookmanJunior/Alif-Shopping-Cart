import { useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";
import CartProduct from "../components/Product/CartProduct";

export default function Cart() {
  const cartProducts = useAppSelector((state) => state.cart);

  const cartTotal = cartProducts.reduce(
    (initialValue, nextItem) =>
      initialValue + nextItem.price * nextItem.quantity,
    0
  );

  return (
    <section>
      {cartProducts.length > 0 ? (
        <>
          {cartProducts.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
          <p className="font-bold">
            <span>Total: </span>
            <span>$</span>
            <span>{cartTotal.toFixed(2)}</span>
          </p>
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

function EmptyCart() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Your cart is empty</h1>
      <Link className="button inline-block my-4" to="/">
        Browse Shop
      </Link>
    </div>
  );
}
