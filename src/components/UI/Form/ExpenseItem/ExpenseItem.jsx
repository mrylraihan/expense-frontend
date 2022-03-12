
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ExpenseDate from '../../../Expenses/ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  return (

    <Card className='expense-item'>
      <Link className='expense-item link-warning' to={`/expenses/${props.expense._id}`}>
        <h3 key={props.expense._id}>
          {props.expense.title}
        </h3>
      </Link>
      <div>
        <div>
          <p className='expense-item__price'>{`$${props.expense.amount}`}</p>
          <ExpenseDate date={props.expense.date}/>
          {/* <TaskDate date={props.task.date}></TaskDate> */}
        </div>
      </div>
    </Card>
  )
}

export default ExpenseItem
