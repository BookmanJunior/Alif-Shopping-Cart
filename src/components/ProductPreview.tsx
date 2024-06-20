import { Link } from "react-router-dom";
import { Product } from "../Types/Product";
import ProductPrice from "./Product/ProductPrice";
import ProductButtons from "./Product/ProductButtons";
import ProductImage from "./Product/ProductImage";

export default function ProductPreview({ product }: { product: Product }) {
  return (
    <div className="grid">
      <Link to={`/product/${product.id}`} className="group">
        <ProductImage
          className="w-[150px]"
          productImage={product.image}
          productTitle={product.title}
        />
        <ProductPrice productPrice={product.price} />
        <p className="group-hover:text-yellow-400">{product.title}</p>
      </Link>
      <ProductButtons
        product={product}
        className="justify-self-start self-end"
      />
    </div>
  );
}
