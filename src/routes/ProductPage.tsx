import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../features/apiSlice";
import ProductButtons from "../components/Product/ProductButtons";
import ProductPrice from "../components/Product/ProductPrice";
import ProductImage from "../components/Product/ProductImage";
import Spinner from "../components/Spinner";

export default function ProductPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError, error } = useGetProductQuery(id);

  if (isLoading) return <Spinner />;

  if (isError) {
    if ("error" in error) {
      throw new Error(error.error);
    } else {
      throw new Error("Something went wrong.");
    }
  }

  return (
    product && (
      <div className="flex gap-4 justify-center flex-wrap">
        <ProductImage
          src={product.image}
          alt={product.title}
          className="w-[300px]"
        />
        <div className="max-w-[500px] flex flex-col gap-4">
          <p className="text-xl">{product.title}</p>
          <ProductPrice productPrice={product.price} />
          <p>{product.description}</p>
          <ProductButtons product={product} />
        </div>
      </div>
    )
  );
}
