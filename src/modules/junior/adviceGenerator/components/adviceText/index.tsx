import { ChildrenType } from '../../../../../common/types/reactTypes';
import styles from './styles.module.scss'

export default function AdviceText({ children }: ChildrenType) {
  return <p className={styles.quote}>{children}</p>;
}
