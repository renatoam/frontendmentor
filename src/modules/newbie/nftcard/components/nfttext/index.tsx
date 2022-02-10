import { NFT_TEXT } from "../../../constants/nftcard";
import styles from "./styles.module.css";

export default function NFTText() {
  return <p className={styles.text}>{NFT_TEXT}</p>;
}
