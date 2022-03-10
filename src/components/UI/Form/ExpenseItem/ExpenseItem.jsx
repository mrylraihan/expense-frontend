
import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <p
        key={props.expense._id}>
        <Link className='expense-item-date' to={`/expenses/${props.expense._id}`}>
          {props.expense.title}
        </Link>
      </p>
      <div>
        <div>
          <p>{props.expense.amount}</p>
          <p>{props.expense.date}</p>
          {/* <TaskDate date={props.task.date}></TaskDate> */}
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem
