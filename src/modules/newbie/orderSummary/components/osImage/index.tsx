import Image from "../../../../../common/components/atoms/image";
import styles from "./styles.module.css";

export default function OrderSummaryImage() {
  return (
    <figure className={styles.image}>
      <Image
        src="/images/illustration-hero.svg"
        layout="fill"
        alt="Order Summary"
      />
    </figure>
  );
}
