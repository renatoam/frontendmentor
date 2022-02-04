import Image from "../../../../../common/components/atoms/image";
import styles from './styles.module.css'

const CUSTOM_WIDTH = undefined
const CUSTOM_HEIGHT = undefined
const CUSTOM_LAYOUT = 'fill'

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
    <figure className={styles.image}>
      <Image
        src={src}
        height={height}
        width={width}
        layout={layout}
        alt={alt}
        priority
      />
    </figure>
  )
}