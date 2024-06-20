import { Product } from "../../Types/Product";
import { Link } from "react-router-dom";
import ProductButtons from "./ProductButtons";
import ProductPrice from "./ProductPrice";

export default function CartProduct({ product }: { product: Product }) {
  return (
    <div className="flex justify-between gap-4 py-4 border-b-2 border-b-gray-400 border-opacity-5">
      <Link
        to={`/product/${product.id}`}
        className="flex items-center gap-4 group"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-[100px] aspect-square object-contain"
        />
        <p className="group-hover:text-yellow-400">{product.title}</p>
      </Link>
      <div className="flex items-center gap-4">
        <ProductPrice productPrice={product.price} />
        <ProductButtons product={product} />
      </div>
    </div>
  );
}
