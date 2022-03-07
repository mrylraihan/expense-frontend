import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexExpenses = (user) => {
  return axios.get(apiUrl + '/expenses', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showExpense = (id, user) => {
  return axios.get(`${apiUrl}/expenses/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteExpense = (id, user) => {
  return axios.delete(`${apiUrl}/expenses/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateExpense = (id, title, amount, date, user) => {
  return axios.patch(
    `${apiUrl}/expenses/${id}`,
    { expense: { title, amount, date } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const createExpense = (title, amount, date, user) => {
  return axios.post(
    `${apiUrl}/expenses`,
    { expense: { title, amount, date } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
