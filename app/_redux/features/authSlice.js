const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    error: null,
    loading: false
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', action.payload)
      }
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const { setToken, setError, setLoading } = authSlice.actions
export default authSlice.reducer