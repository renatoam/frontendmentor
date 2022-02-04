import { ChildrenType } from "../../../../../common/types/reactTypes";
import styles from './styles.module.css'

export default function CodeText({ children }: ChildrenType) {
  return (
    <p className={styles.text}>{children}</p>
  )
}