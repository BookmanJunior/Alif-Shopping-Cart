import { Link } from "react-router-dom";
import { Product } from "../../Types/Product";
import ProductPrice from "./ProductPrice";
import ProductButtons from "./ProductButtons";
import ProductImage from "./ProductImage";

export default function ProductPreview({ product }: { product: Product }) {
  return (
    <div className="grid">
      <Link to={`/product/${product.id}`} className="group">
        <ProductImage
          className="w-[150px] my-4"
          productImage={product.image}
          productTitle={product.title}
        />
        <ProductPrice productPrice={product.price} />
        <p className="group-hover:text-yellow-400 max-w-[250px]">
          {product.title}
        </p>
      </Link>
      <ProductButtons
        product={product}
        className="justify-self-start self-end"
      />
    </div>
  );
}
