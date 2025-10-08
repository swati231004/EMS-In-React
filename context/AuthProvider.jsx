import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employee: [],
    admin: [],
  })

  useEffect(() => {
    // Ensure default data is set only once if localStorage is empty
    const storedData = getLocalStorage()

    if (!storedData || !storedData.employee || !storedData.admin) {
      setLocalStorage({
        employee: [],
        admin: []
      })
    }

    const { employee = [], admin = [] } = getLocalStorage() || {}
    setUserData({ employee, admin })
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
