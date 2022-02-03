import NextImage, { ImageProps as NextImageProps } from "next/image";

interface IImageProps extends NextImageProps {
  alt?: string
}

export default function Image(props: IImageProps) {
  const { src, height, width, layout, alt } = props

  return (
    <NextImage src={src} height={height} width={width} layout={layout} alt={alt} />
  )
}