import Divider from '../../../../../common/components/atoms/divider'
import styles from './styles.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface ExpensesProps {
  day: string
  amount: number
}

const INCREASE_SIZE_BY = 20
const WEEK_DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

export default function ExpensesWrapper() {
  const [expenses, setExpenses] = useState<ExpensesProps[]>([])
  const [today, setToday] = useState('wed')

  async function getExpenses() {
    try {
      const response = await axios.get<ExpensesProps[]>('/api/expenses')

      setExpenses(response.data)
    } catch (error) {
      console.error('Error on getting expenses: ', error)
    }
  }

  function getToday() {
    const date = new Date()
    const todayInitials = date
      .toDateString()
      .slice(0, 3)
      .toLowerCase()

    setToday(todayInitials)
  }

  useEffect(() => {
    getExpenses()
    getToday()
  }, [])
  
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <section className={styles.balance}>
          <h2>My balance</h2>
          <p>$ 921.48</p>
        </section>
        <figure className={styles.logo}>
          <img src="/icons/logo-expenses.svg" alt="Expenses Logo" />
        </figure>
      </header>
      <article className={styles.expenses}>
        <h2>Spending - Last 7 days</h2>
        <section className={styles.chart}>
          {expenses?.map(expense => {
            const todayClassName = expense.day === today ? styles.today : ''

            return (
              <section
                key={expense.amount + expense.day}
                className={styles.column}
              >
                <div
                  className={`${styles.bar} ${todayClassName}`}
                  style={{ height: `${expense.amount + INCREASE_SIZE_BY}%` }}
                />
                <span className={styles.day}>{expense.day}</span>
              </section>
            )
          })}
        </section>
        <Divider className={styles.divider} />
        <section className={styles.information}>
          <section className={styles.this}>
            <h2>Total this month</h2>
            <p className={styles.current}>$ 478.33</p>
          </section>
          <section className={styles.last}>
            <p className={styles.profit}>+2.4%</p>
            <h2>from last month</h2>
          </section>
        </section>
      </article>
    </section>
  )
}