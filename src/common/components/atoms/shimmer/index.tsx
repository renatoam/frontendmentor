import styles from './styles.module.scss'

interface ShimmerProps {
  variant?: 'rectangle' | 'circular' | 'card' | 'text'
  count?: number
  flexDirection?: 'row' | 'column'
  align?: 'start' | 'end' | 'center'
}

export default function Shimmer(props: ShimmerProps) {
  const {
    variant = 'rectangle',
    count = 1,
    flexDirection = 'row',
    align = 'start'
  } = props
  const elements = Array.from(Array(count).keys())

  return (
    <section
      className={styles.wrapper}
      style={{
        flexDirection,
        alignItems: align,
        justifyContent: align
      }}>
      {elements.map((_el, index) => {
        return <div key={index} className={styles[variant]} />
      })}
    </section>
  )
}
