import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card/Card'

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <div>
          <div className='expense-item'>
            <h1>{props.title}</h1>
            <div className='expense-item__price'>{`$${props.amount}`}</div>
            <ExpenseDate date={props.date}></ExpenseDate>
          </div>
        </div>
      </Card>
    </li>
  )
}
export default ExpenseItem
