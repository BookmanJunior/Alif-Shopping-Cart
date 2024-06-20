export default function ProductPrice({
  productPrice,
}: {
  productPrice: number;
}) {
  return (
    <p className="font-bold">
      <span>$</span>
      <span>{productPrice}</span>
    </p>
  );
}
