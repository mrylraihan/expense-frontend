import React from 'react'
import { Link } from 'react-router-dom'
import FakeApp from '../FakeMain/FakeApp'

const Home = (props) => {
  if (props.user) {
    return (
      <>
        <h1>Create an Expense!</h1>
        <FakeApp user={props.user}></FakeApp>
      </>
    )
  } else {
    return (
      <div>
        <h1>Hello im home!</h1>
        <p>you should Sign up!</p>
        <Link to='/sign-up'> <button>Sign up!</button>
        </Link>
        <Link to='/sign-in'>
          <button>Sign in!</button>
        </Link>
      </div>
    )
  }
}

export default Home
