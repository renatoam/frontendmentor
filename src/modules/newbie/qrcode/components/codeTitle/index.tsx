import styles from './styles.module.css'
import { ChildrenType } from "../../../../../common/types/reactTypes";

export default function CodeTitle({ children }: ChildrenType) {
  return (
    <h2 className={styles.title}>{children}</h2>
  )
}