import Image from "../../../../../common/components/atoms/image";

const CUSTOM_WIDTH = 50
const CUSTOM_HEIGHT = 50
const CUSTOM_LAYOUT = 'responsive'

interface ICodeImageProps {
  src: string
  alt?: string
}

export default function CodeImage(props: ICodeImageProps) {
  const { src, alt } = props
  
  const width = CUSTOM_WIDTH
  const height = CUSTOM_HEIGHT
  const layout = CUSTOM_LAYOUT

  return (
    <Image src={src} height={height} width={width} layout={layout} alt={alt} />
  )
}