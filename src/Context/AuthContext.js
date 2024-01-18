import React, { useState, createContext } from 'react'

// context provider
export const AuthContext = createContext()

// context provider component
function AuthProvider(props) {
    const [isAdmin,setIsdmin] = useState(false)
    const [isUser,setIsUser] = useState(false)
    const [isLogin,setIsLogin] = useState(false)
    const [currentUser,setCurrentUser] = useState(false)

  return (
    <AuthContext.Provider value={{ isAdmin, isUser, isLogin, currentUser }}>
        { props.children }
    </AuthContext.Provider>
  )
}

export default AuthProvider