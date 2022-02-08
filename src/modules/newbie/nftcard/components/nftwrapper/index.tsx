import { ChildrenType } from "../../../../../common/types/reactTypes";
import styles from "./styles.module.css";

export default function NFT({ children }: ChildrenType) {
  return <section className={styles.wrapper}>{children}</section>;
}
