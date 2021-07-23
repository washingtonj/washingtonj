import { createContext, useEffect, useState } from 'react'

export const Theme = createContext([])

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [body, setBody] = useState(null)

  useEffect(() => {
    setBody(document.querySelector('body'))
  }, [])

  function change () {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    body.classList.toggle('dark')
  }

  return (
    <Theme.Provider value={[theme, change]}>
      {children}
    </Theme.Provider>
  )
}

export default ThemeContext
