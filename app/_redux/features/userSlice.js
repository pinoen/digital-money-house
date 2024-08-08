import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: typeof window !== 'undefined' && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    account: typeof window !== 'undefined' && localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : {},
    activity: typeof window !== 'undefined' && localStorage.getItem('activity') ? JSON.parse(localStorage.getItem('activity')) : [],
    cards: typeof window !== 'undefined' && localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [],
    loading: false,
    selectedCard: null,
    amount: 0
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(action.payload))
      }
    },
    setAccount: (state, action) => {
      state.account = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('account', JSON.stringify(action.payload))
      }
    },
    setActivity: (state, action) => {
      state.activity = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('activity', JSON.stringify(action.payload))
      }
    },
    setCards: (state, action) => {
      state.cards = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('cards', JSON.stringify(action.payload))
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    addCard: (state, action) => {
      state.cards.push(action.payload)
      if (typeof window !== 'undefined') {
        localStorage.setItem('cards', JSON.stringify(state.cards))
      }
    },
    addActivity: (state, action) => {
      state.activity.push(action.payload)
      if (typeof window !== 'undefined') {
        localStorage.setItem('activity', JSON.stringify(state.activity))
      }
    },
    updateAccountBalance: (state, action) => {
      const updatedAccount = { ...state.account, available_amount: action.payload }
      state.account = updatedAccount
      if (typeof window !== 'undefined') {
        localStorage.setItem('account', JSON.stringify(updatedAccount))
      }
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload
    },
    setAmount: (state, action) => {
      state.amount = action.payload
    }
  }
})

export const { setUser, setAccount, setActivity, setCards, setLoading, addCard, addActivity, updateAccountBalance, setSelectedCard, setAmount } = userSlice.actions
export default userSlice.reducer