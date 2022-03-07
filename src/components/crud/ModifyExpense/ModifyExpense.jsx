import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import { deleteExpense, showExpense } from '../../../api/expenseApi'

const ModifyExpense = ({ user, msgAlert }) => {
  const [expense, setExpense] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await showExpense(id, user)
        setExpense(res.data.expense)
      } catch (error) {
        msgAlert({
          heading: 'Expense failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async () => {
    try {
      await deleteExpense(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete expense',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (!expense) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/expenses' />
  } else {
    return (
      <div className='expense-delete'>
        <div className='row'>
          <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <div>
              {/* <TaskDate date={task.date}></TaskDate> */}
            </div>
            <h2 className='expense-item-title'>{expense.title}</h2>
            <p className='expense-delete-description'>{expense.amount}</p>
            <Button variant='danger' onClick={handleDeleteClick}>Delete Expense
            </Button>
            <Link to={`/expenses/${id}/edit`}>
              <Button variant='warning' type='submit'>Update Expense
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ModifyExpense
