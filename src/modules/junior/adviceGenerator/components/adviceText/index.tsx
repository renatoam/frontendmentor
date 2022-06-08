import { ReactNode } from 'react';
import Shimmer from '../../../../../common/components/atoms/shimmer';
import styles from './styles.module.scss'

interface AdviceTextProps {
  isLoading?: boolean
  children: ReactNode
}

export default function AdviceText(props: AdviceTextProps) {
  const { isLoading = true, children } = props

  if (isLoading) {
    return (
      <Shimmer
        count={2}
        flexDirection="column"
        variant="text"
        align='center'
      />
    )
  }

  return <p className={styles.quote}>{children}</p>;
}
