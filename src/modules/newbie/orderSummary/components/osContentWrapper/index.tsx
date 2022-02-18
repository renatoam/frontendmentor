import { ChildrenType } from "../../../../../common/types/reactTypes";
import styles from "./styles.module.css";

export default function OrderSummaryContentWrapper({ children }: ChildrenType) {
  return <section className={styles.wrapper}>{children}</section>;
}
