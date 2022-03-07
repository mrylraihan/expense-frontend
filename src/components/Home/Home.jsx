import React from 'react'
// import { Link } from 'react-router-dom'

const Home = (props) => {
  if (props.user) {
    return (
      <>
        <h1>Create an Expense!</h1>
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
