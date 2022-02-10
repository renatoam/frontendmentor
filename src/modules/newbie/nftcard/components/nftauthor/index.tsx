import styles from "./styles.module.css";
import Image from "../../../../../common/components/atoms/image";
import { NFT_AUTHOR, NFT_CREATION } from "../../../constants/nftcard";

export default function NFTAuthor() {
  return (
    <section className={styles.author}>
      <figure className={styles.avatar}>
        <Image
          src="/images/image-avatar.png"
          layout="fill"
          alt="Jules Wyvern"
        />
      </figure>
      <section className={styles.text}>
        <p>{NFT_CREATION}</p>
        <p>{NFT_AUTHOR}</p>
      </section>
    </section>
  );
}
