import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'
import { VscHome, VscAccount, VscSignIn, VscGraph, VscUnlock, VscSignOut, VscChecklist, VscEdit } from 'react-icons/vsc'

const authenticatedOptions = (
  <>
    <NavLink to='/' className='nav-link'><VscGraph></VscGraph></NavLink>
    <NavLink to='/expenses' className='nav-link'><VscChecklist/></NavLink>
    <NavLink to='/expenses/create' className='nav-link'><VscEdit/></NavLink>
    <NavLink to='/change-password' className='nav-link'><VscUnlock/></NavLink>
    <NavLink to='/sign-out' className='nav-link'><VscSignOut/></NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/' className='nav-link'><VscHome></VscHome></NavLink>
    <NavLink to='/sign-up' className='nav-link'><VscSignIn></VscSignIn></NavLink>
    <NavLink to='/sign-in' className='nav-link'><VscAccount></VscAccount></NavLink>
  </>
)

// const alwaysOptions = (
//   <>
//     <NavLink to='/' className='nav-link'><VscHome></VscHome></NavLink>
//   </>

// )

const Header = ({ user }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Container>
      <Navbar.Brand>
        <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>Expense-Tracker</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {user && (
            <span className='navbar-text me-2'>Welcome, {user.username}</span>
          )}
          {/* {alwaysOptions} */}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
