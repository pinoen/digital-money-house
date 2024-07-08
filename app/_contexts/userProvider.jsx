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
  const [selectedCard, setSelectedCard] = useState(null)
  const [amount, setAmount] = useState(0)

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

  const addCard = (newCard) => {
    setCards([...cards, newCard])
    if (typeof window !== 'undefined') {
      localStorage.setItem('cards', JSON.stringify([...cards, newCard]))
    }
  }

  const addActivity = (newActivity) => {
    setActivity([...activity, newActivity])
    if (typeof window !== 'undefined') {
      localStorage.setItem('activity', JSON.stringify([...activity, newActivity]))
    }

    if (newActivity.type === 'withdraw') {
      setAmount(account.available_amount - newActivity.amount)
    } else if (newActivity.type === 'deposit') {
      setAmount(account.available_amount + newActivity.amount)
    }
  }

  if (loading) {
    return <Page />
  }

  return (
    <UserContext.Provider value={{ user, activity, account, cards, accountId, loading, addCard, selectedCard, setSelectedCard, amount, setAmount, addActivity }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}