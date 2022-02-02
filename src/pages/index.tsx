import styles from '../styles/home.module.css'

export function getServerSideProps() {
  return {
    props: {
      test: 'Bakareeeeee'
    }
  }
}

export default function HomePage({ test }) {
  return <div className={styles.text}>{test}</div>
}