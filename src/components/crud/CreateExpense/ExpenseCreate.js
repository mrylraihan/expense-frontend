import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

// Import MovieForm:
import ExpenseForm from '../../UI/Form/ExpenseForm'
import { createExpense } from '../../../api/expenseApi'
// import Background from '../Visuals/images/pencil_background.jpg'

const ExpenseCreate = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createExpense(title, amount, new Date(date), user)
      console.log(res.data)
      setCreatedId(res.data.expense._id)

      msgAlert({
        heading: 'Expense Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create expense',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if movie has been created,Redirect to the 'show' page
    return <Navigate to={`/expenses/${createdId}`} />
  }
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3 className='expense-text'>Create Expense</h3>
        <ExpenseForm
          handleSubmit={handleSubmit}
          title={title}
          amount={amount}
          date={date}
          setTitle={setTitle}
          setAmount={setAmount}
          setDate={setDate}
        />
      </div>
    </div>
  )
}
export default ExpenseCreate
