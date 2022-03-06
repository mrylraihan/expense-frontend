import React from 'react'
import './ExpenseDate.css'
function ExpenseDate (props) {
  const newDate = new Date(props.date)
  const month = newDate.toLocaleString('en-US', { month: 'long' })
  const year = newDate.getFullYear()
  const day = newDate.toLocaleString('en-US', { day: '2-digit' })

  return (

    // eslint-disable-next-line react/react-in-jsx-scope
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>

  )
}

export default ExpenseDate
