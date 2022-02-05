import styles from "../styles/home.module.css";

export function getServerSideProps() {
  return {
    props: {
      test: "Bakareeeeee",
    },
  };
}

export default function HomePage({ test }: { test: string }) {
  return <div className={styles.text}>{test}</div>;
}
