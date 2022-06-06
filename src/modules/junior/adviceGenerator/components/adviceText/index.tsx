import { ReactNode } from 'react';
import { ChildrenType } from '../../../../../common/types/reactTypes';
import styles from './styles.module.scss'

interface AdviceTextProps {
  isLoading?: boolean
  children: ReactNode
}

export default function AdviceText(props: AdviceTextProps) {
  const { isLoading = true, children } = props

  if (true) return <div className={styles.shimmer} />

  return <p className={styles.quote}>{children}</p>;
}
