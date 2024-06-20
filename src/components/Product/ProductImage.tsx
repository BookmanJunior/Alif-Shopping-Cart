interface ProductImage {
  productImage: string;
  productTitle: string;
  className?: string;
}

export default function ProductImage({
  productImage,
  productTitle,
  className,
}: ProductImage) {
  return (
    <img
      src={productImage}
      alt={productTitle}
      className={`${className ? className : ""} aspect-square object-contain`}
    />
  );
}
