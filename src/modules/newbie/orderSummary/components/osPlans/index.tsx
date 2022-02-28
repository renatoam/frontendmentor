import styles from "./styles.module.css";
import Image from "../../../../../common/components/atoms/image";

export default function OrderSummaryPlans() {
  return (
    <section className={styles.wrapper}>
      <figure className={styles.image}>
        <Image src="/icons/icon-music.svg" alt="Music" layout="fill" />
      </figure>
      <section className={styles.plan}>
        <h2>Annual Plan</h2>
        <p>$59.99/year</p>
      </section>
      <section className={styles.actions}>
        <p>Change</p>
      </section>
    </section>
  );
}
