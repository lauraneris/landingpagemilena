// components/BrandIcon.tsx
import { ICONS, type IconName } from "@/lib/icons";

type BrandIconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  name: IconName;
  size?: number; // se não passar, NÃO força tamanho
};

export function BrandIcon({
  name,
  size,
  alt,
  className = "",
  style,
  ...rest
}: BrandIconProps) {
  const src = ICONS[name];

  const sizeStyle = size ? { width: size, height: size } : {};

  return (
    <img
      src={src}
      alt={alt ?? name}
      className={className}
      style={{ ...(style || {}), ...sizeStyle }}
      {...rest}
    />
  );
}
