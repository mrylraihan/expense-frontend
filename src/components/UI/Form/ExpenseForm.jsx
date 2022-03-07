import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ExpenseForm = ({ handleSubmit, title, amount, date, setTitle, setAmount, setDate }) => {
  return (<Form onSubmit={handleSubmit}>
    <Form.Group controlId='title'>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder='what do you have to do?'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='amount'>
      <Form.Label>Amount</Form.Label>
      <Form.Control
        placeholder='e.g. not get covid this week'
        type='number'
        name='amount'
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='date'>
      <Form.Label>Date</Form.Label>
      <Form.Control
        placeholder='Pick a Date'
        type='date'
        name='date'
        value={date}
        onChange={event => setDate(event.target.value)}
      />
    </Form.Group>
    <Button className='mt-2' variant='warning' type='submit'>Submit</Button>
  </Form>
  )
}

export default ExpenseForm
