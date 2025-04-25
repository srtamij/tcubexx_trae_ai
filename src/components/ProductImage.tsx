import React from "react";
import { cn } from "@/lib/utils";

interface ProductImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function ProductImage({ 
  src, 
  alt, 
  className, 
  fallback = "/images/placeholder.jpg",
  ...props 
}: ProductImageProps) {
  const [error, setError] = React.useState(false);

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      className={cn("object-cover", className)}
      onError={() => setError(true)}
      {...props}
    />
  );
}