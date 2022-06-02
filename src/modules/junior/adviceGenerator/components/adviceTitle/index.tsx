import { ChildrenType } from '../../../../../common/types/reactTypes';
import styles from './styles.module.scss'

export default function AdviceTitle({ children }: ChildrenType) {
  return <h1 className={styles.title}>{children}</h1>;
}
