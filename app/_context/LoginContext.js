import { useContext, useState } from "react"
import { createContext } from "react"

export const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({
    email: "pinoen@yahoo.com.ar",
    password: "Emili0$",
  })

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLoginData = () => {
  return useContext(LoginContext)
}

