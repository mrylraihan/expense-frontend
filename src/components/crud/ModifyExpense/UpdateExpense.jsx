import React, { useEffect, useState } from 'react'
import ExpenseForm from '../../UI/Form/ExpenseForm'
import { showExpense, updateExpense } from '../../../api/expenseApi'
import { Navigate, useParams } from 'react-router-dom'

const UpdateExpense = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showExpense(id, user)
        setTitle(res.data.expense.title)
        setAmount(res.data.expense.amount)
        setDate(res.data.expense.date)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load Expense',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await updateExpense(id, title, amount, date, user)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to update Expense',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (updated) {
    // Redirect to the 'show' page
    return <Navigate to={`/expenses/${id}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Edit Expense</h3>
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

export default UpdateExpense
