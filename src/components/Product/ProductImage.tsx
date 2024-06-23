interface ProductImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export default function ProductImage({ className, ...props }: ProductImage) {
  return (
    <img
      className={`${className ? className : ""} aspect-square object-contain`}
      {...props}
    />
  );
}
