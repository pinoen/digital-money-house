'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export const UserContext = createContext()



export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {})
  const [account, setAccount] = useState(() => localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : {})
  const [activity, setActivity] = useState(() => localStorage.getItem('activity') ? JSON.parse(localStorage.getItem('activity')) : [])
  const [cards, setCards] = useState(() => localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [])
  const accountId = account.id
  const userId = account.user_id

  useEffect(() => {
    fetch('https://digitalmoney.digitalhouse.com/api/account', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json()).then(data => {
      setAccount(data)
      localStorage.setItem('account', JSON.stringify(data))
    })
  }, [])

  useEffect(() => {
    fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/activity`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json()).then(data => {
      setActivity(data)
      localStorage.setItem('activity', JSON.stringify(data))
    })
  }, [accountId])

  useEffect(() => {
    fetch(`https://digitalmoney.digitalhouse.com/api/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json()).then(data => {
      setUser(data)
      localStorage.setItem('user', JSON.stringify(data))
    })
  }, [userId])

  useEffect(() => {
    fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json()).then(data => {
      setCards(data)
      localStorage.setItem('cards', JSON.stringify(data))
    })
  }, [accountId])

  return (
    <UserContext.Provider value={{ user, activity, account, cards, accountId }}>
      {children}
    </UserContext.Provider>
  )

}

export const useUser = () => {
  return useContext(UserContext)
}