import Image from "../../../../../common/components/atoms/image";
import { NFT_ETHEREUM, NFT_TIME } from "../../../constants/nftcard";
import styles from "./styles.module.css";

export default function NFTInfo() {
  return (
    <section className={styles.info}>
      <span className={styles.value}>
        <figure className={styles.icon}>
          <Image src="/icons/icon-ethereum.svg" layout="fill" alt="Ethereum" />
        </figure>
        {NFT_ETHEREUM}
      </span>
      <span className={styles.time}>
        <figure className={styles.icon}>
          <Image
            src="/icons/icon-clock.svg"
            layout="fill"
            alt="Remaining time"
          />
        </figure>
        {NFT_TIME}
      </span>
    </section>
  );
}
