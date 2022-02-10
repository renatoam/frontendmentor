import { NFT_TITLE } from "../../../constants/nftcard";
import styles from "./styles.module.css";

export default function NFTTitle() {
  return <h2 className={styles.title}>{NFT_TITLE}</h2>;
}
