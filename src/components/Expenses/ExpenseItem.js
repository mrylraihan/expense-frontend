import styles from './ExpenseItem.module.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import React, { useState } from 'react'
import { deleteExpense } from '../../api/expenseApi'

const ExpenseItem = (props) => {
  const [deleteTrigger, setDeleteTrigger] = useState(false)
  const onDelete = async (id) => {
    try {
      console.log(this)
      await deleteExpense(id, props.user)
      setDeleteTrigger(!deleteTrigger)
      props.dt(!deleteTrigger)
      console.log(deleteTrigger)
      console.log(props.dts)
    } catch (error) {

    }
  }
  return (
    <li>
      <Card className={styles['expense-item']}>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className={styles['expense-item__description']}>
          <h2>{props.title}</h2>
          <div className={styles['expense-item__price']}>{props.amount}</div>
          <p>{props.id}</p>
        </div>
        <button onClick={() => { onDelete(props.id) }}>Delete expense</button>
      </Card>
    </li>
  )
}
export default ExpenseItem
