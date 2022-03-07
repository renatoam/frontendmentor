import Link from "../link";
import styles from "./styles.module.css";

export default function Attribution() {
  return (
    <section className={styles.attribution}>
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge">
        Frontend Mentor
      </Link>
      . Coded by <Link href="#">Renato Melo</Link>.
    </section>
  );
}

// TODO: create translate component (i18next)
