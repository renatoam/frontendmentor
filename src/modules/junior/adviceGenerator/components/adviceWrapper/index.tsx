import { ChildrenType } from "../../../../../common/types/reactTypes";
import styles from './styles.module.scss'

export default function AdviceWrapper({ children }: ChildrenType) {
  return <section className={styles.wrapper}>{children}</section>;
}
