import NextImage, { ImageProps as NextImageProps } from "next/image";

interface IImageProps extends Partial<NextImageProps> {
  src: string | StaticImageData
  alt?: string
}

export default function Image(props: IImageProps) {
  const { src, height, width, layout, alt } = props
  const imageSizingProps = layout === 'fill'
    ? { layout }
    : { height, width }

  return (
    <NextImage src={src} alt={alt} {...imageSizingProps} />
  )
}