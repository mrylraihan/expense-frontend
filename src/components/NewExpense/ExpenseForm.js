import React, { useState } from 'react'
import { createExpense } from '../../api/expenseApi'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  // const [userInput, setUserInput]= useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })
    //     setUserInput((prevState)=>{
    //         return {
    //             ...prevState, enteredTitle: event.target.value
    //         }
    //     }
    // )
    setEnteredTitle(event.target.value)
    console.log(enteredTitle)
  }
  const amountChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })
    // setUserInput(prevState=>{
    //     return {
    //         ...prevState,
    //         enteredAmount: event.target.value
    //     }
    // })
    setEnteredAmount(event.target.value)
    console.log(enteredAmount)
  }
  const dateChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // })
    // setUserInput(prevState => {
    //     return {
    //         ...prevState,
    //         enteredDate: event.target.value
    //     }
    // })
    setEnteredDate(event.target.value)
    console.log(enteredDate)
    console.log()
  }
  // Add createApi call Here
  const submitHandler = async event => {
    event.preventDefault()
    try {
      const res = await createExpense(enteredTitle, enteredAmount, new Date(enteredDate), props.user)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    console.log('In ExpenseForm', expenseData)
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name='title'value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' name='amount' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' name='date'min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
