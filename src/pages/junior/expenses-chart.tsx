import ExpensesChart from "../../modules/junior/expensesChart";
import styles from '../../styles/junior/expensesChart.module.scss'

export default function ExpensesChartPage() {
  return (
    <main className={styles.main}>
      <ExpensesChart />
    </main>
  )
}