import React, { useEffect, useState } from 'react'
import Expenses from '../../components/Expenses/Expenses'
import { indexExpenses } from '../../api/expenseApi'
// import { Link } from 'react-router-dom'

const Home = (props) => {
  const [expense, setExpenses] = useState([])

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await indexExpenses(props.user)
        setExpenses(res.data.expenses)
      } catch (error) {
        props.msgAlert({
          heading: 'Expense List failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchExpenses()
  }, [props.user, props.expenses])

  if (props.user) {
    return (
      <>
        <h1>Create an Expense!</h1>
        <Expenses items={expense} />
      </>
    )
  } else {
    return (
      <div>
        <h1>Hello im home! </h1>
        <h2>Start keeping track of your finances</h2>
        <h3>The fun way!</h3>
        <p>you should Sign up!</p>
        {/* <Link to='/sign-up'> <button>Sign up!</button>
        </Link>
        <Link to='/sign-in'>
          <button>Sign in!</button>
        </Link> */}
      </div>
    )
  }
}

export default Home
