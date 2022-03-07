import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { indexExpenses } from '../../../api/expenseApi'
import ExpenseItem from '../../UI/Form/ExpenseItem/ExpenseItem'

const GetAllExpenses = ({ user, msgAlert }) => {
  const [expenses, setExpenses] = useState([])
  if (!user) {
    return <Navigate to='/'/>
  }
  const fetchExpenses = async () => {
    try {
      const res = await indexExpenses(user)
      setExpenses(res.data.expenses)
    } catch (error) {
      msgAlert({
        heading: 'Expense List failed to load',
        message: error.message,
        variant: 'danger'
      })
    }
  }
  useEffect(() => {
    fetchExpenses()
  }, [])
  if (!expenses) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }
  const expensesList = expenses.map((expense) => (
    <ExpenseItem
    //   fetchExpenses={fetchExpenses}
      key={expense._id}
      expense={expense}
      user={user}
      msgAlert={msgAlert}></ExpenseItem>
  ))
  return (
    <div>
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          {/* <img className='background-image' src={Background} /> */}
          <h3 className='expenses-text'>My Expenses</h3>
          <ul>{expensesList}</ul>
        </div>
      </div>
    </div>
  )
}

export default GetAllExpenses
