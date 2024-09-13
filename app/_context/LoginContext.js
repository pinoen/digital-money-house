import { useContext, useState } from "react"
import { createContext } from "react"

export const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({
    email: "pinoen@yahoo.com.ar",
    password: "Emili0$",
  })
  const [amount, setAmount] = useState(1000)
  const [selectedCard, setSelectedCard] = useState(null)



  return (
    <LoginContext.Provider value={{ loginData, setLoginData, amount, setAmount, selectedCard, setSelectedCard }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLoginData = () => {
  return useContext(LoginContext)
}

