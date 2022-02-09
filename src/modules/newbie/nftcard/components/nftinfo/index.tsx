import styles from "./styles.module.css";

export default function NFTInfo() {
  return (
    <section className={styles.info}>
      <span className={styles.value}>0.041 ETH</span>
      <span className={styles.time}>3 days left</span>
    </section>
  );
}
