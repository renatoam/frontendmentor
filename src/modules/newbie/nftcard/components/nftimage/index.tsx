import Image from "../../../../../common/components/atoms/image";
import styles from "./styles.module.css";

export default function NFTImage() {
  return (
    <figure className={styles.image}>
      <Image
        src="/images/image-equilibrium.jpg"
        layout="fill"
        alt="NFT Equilibrium"
        priority
      />
    </figure>
  );
}
