import Expenses from '../Expenses/Expenses'
import React, { useEffect, useState } from 'react'
import NewExpense from '../NewExpense/NewExpense'
import { indexExpenses } from '../../api/expenseApi'

function FakeApp (props) {
  const [expenses, setExpenses] = useState([])
  const [deleteTrigger, setDeleteTrigger] = useState(false)
  const [updateTrigger, setUpdateTrigger] = useState(false)
  // lets see

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const Expenselist = await indexExpenses(props.user)
        setExpenses(Expenselist.data.expenses)
        console.log(Expenselist.data.expenses)
      } catch (error) {
        console.log(error)
      }
    }
    getExpenses()
  }, [deleteTrigger, updateTrigger])

  // Using JSX
  const addExpenseHandler = expense => {
    console.log('In App.js', expense)
    // setExpenses(expense)
    const getExpenses = async () => {
      try {
        const Expenselist = await indexExpenses(props.user)
        setExpenses(Expenselist.data.expenses)
        console.log(Expenselist.data.expenses, 'from addExpenseHandler')
      } catch (error) {
        console.log(error)
      }
    }
    getExpenses()
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} user={props.user}></NewExpense>
      <Expenses dt={setDeleteTrigger} dts={deleteTrigger} ut={setUpdateTrigger} items={expenses} user={props.user} />
    </div>
  )
}
// or you can do it like this
// const App = ()=>  (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );

export default FakeApp
