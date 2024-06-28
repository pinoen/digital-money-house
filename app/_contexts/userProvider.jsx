'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import Page from '../loading'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {})
  const [account, setAccount] = useState(() => localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : {})
  const [activity, setActivity] = useState(() => localStorage.getItem('activity') ? JSON.parse(localStorage.getItem('activity')) : [])
  const [cards, setCards] = useState(() => localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [])
  const [loading, setLoading] = useState(true)
  const accountId = account.id

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountResponse = await fetch('https://digitalmoney.digitalhouse.com/api/account', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          }
        });
        const accountData = await accountResponse.json();
        setAccount(accountData);
        localStorage.setItem('account', JSON.stringify(accountData));

        const activityResponse = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${accountData.id}/activity`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          }
        });
        const activityData = await activityResponse.json();
        setActivity(activityData);
        localStorage.setItem('activity', JSON.stringify(activityData));

        const userResponse = await fetch(`https://digitalmoney.digitalhouse.com/api/users/${accountData.user_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          }
        });
        const userData = await userResponse.json();
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));

        const cardsResponse = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${accountData.id}/cards`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          }
        });
        const cardsData = await cardsResponse.json();
        setCards(cardsData);
        localStorage.setItem('cards', JSON.stringify(cardsData));

      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Page />;
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