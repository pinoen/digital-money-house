'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import Page from '../loading'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [account, setAccount] = useState({})
  const [activity, setActivity] = useState([])
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const accountId = account.id

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      const storedAccount = localStorage.getItem('account')
      const storedActivity = localStorage.getItem('activity')
      const storedCards = localStorage.getItem('cards')

      if (storedUser) setUser(JSON.parse(storedUser))
      if (storedAccount) setAccount(JSON.parse(storedAccount))
      if (storedActivity) setActivity(JSON.parse(storedActivity))
      if (storedCards) setCards(JSON.parse(storedCards))

      const fetchData = async () => {
        try {
          const accountResponse = await fetch('https://digitalmoney.digitalhouse.com/api/account', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
            }
          })
          const accountData = await accountResponse.json()
          setAccount(accountData)
          localStorage.setItem('account', JSON.stringify(accountData))

          const activityResponse = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${accountData.id}/activity`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
            }
          })
          const activityData = await activityResponse.json()
          setActivity(activityData)
          localStorage.setItem('activity', JSON.stringify(activityData))

          const userResponse = await fetch(`https://digitalmoney.digitalhouse.com/api/users/${accountData.user_id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
            }
          })
          const userData = await userResponse.json()
          setUser(userData)
          localStorage.setItem('user', JSON.stringify(userData))

          const cardsResponse = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${accountData.id}/cards`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
            }
          })
          const cardsData = await cardsResponse.json()
          setCards(cardsData)
          localStorage.setItem('cards', JSON.stringify(cardsData))
        } catch (error) {
          console.error('Failed to fetch data:', error)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }
  }, [])

  if (loading) {
    return <Page />
  }

  return (
    <UserContext.Provider value={{ user, activity, account, cards, accountId, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}