import { useContext, useState } from "react"
import { createContext } from "react"

export const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [amount, setAmount] = useState(0)
  const [selectedCard, setSelectedCard] = useState(null)
  const [serviceNumber, setServiceNumber] = useState(null)

  return (
    <LoginContext.Provider value={{ loginData, setLoginData, amount, setAmount, selectedCard, setSelectedCard, serviceNumber, setServiceNumber }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLoginData = () => {
  return useContext(LoginContext)
}

