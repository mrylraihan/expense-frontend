/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Home from './components/Home/Home'
import ExpenseCreate from './components/crud/CreateExpense/ExpenseCreate'
import ModifyExpense from './components/crud/ModifyExpense/ModifyExpense'
import UpdateExpense from './components/crud/ModifyExpense/UpdateExpense'
import GetAllExpenses from './components/crud/GetAllExpense/GetAllExpenses'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [list, getList] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='container'>
        <Routes>
          <Route
            exact path='/'
            element={<Home expenses={list} msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-out'
            element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /> }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} /> }
          />
          <Route
            path='/expenses'
            element={< GetAllExpenses msgAlert={msgAlert} getList={getList} user={user} /> }
          />
          <Route
            path='/expenses/create'
            element={< ExpenseCreate msgAlert={msgAlert} user={user} /> }
          />
          <Route
            path='/expenses/:id'
            element={< ModifyExpense msgAlert={msgAlert} user={user} /> }
          />
          <Route
            path='/expenses/:id/edit'
            element={< UpdateExpense msgAlert={msgAlert} user={user} /> }
          />

        </Routes>
      </main>
    </>
  )
}

export default App
