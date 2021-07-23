import { useRef, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { Lightbulb, LightbulbSolid } from 'assets/icons'
import { Theme } from 'context/theme'
import Link from 'next/link'

const pages = [
  { path: '/', name: 'sobre' },
  { path: '/portfolio', name: 'portfolio' }
]

export default function LayoutRightSide ({ children }) {
  const navRef = useRef()
  const route = useRouter()
  const [theme, setTheme] = useContext(Theme)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isValid = window.scrollY > 500
      navRef.current.classList.toggle('nav-menu-stick', isValid)
    })
  }, [])

  return (
    <div className="relative lg:w-3/6">
      <nav ref={navRef} className="flex items-center justify-between mb-4">
        <ul className="nav-menu flex">
          {pages.map(page => (
            <li
              key={page.name}
              className={`text-xl uppercase font-extrabold text-light-primary dark:text-dark-primary
                ${route.pathname !== page.path ? 'text-opacity-25 dark:text-opacity-25' : ''}`
              }>
              <Link href={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
        {theme === 'dark'
          ? <Lightbulb onClick={setTheme} className="text-dark-primary fill-current w-3.5 mr-2 lg:hidden"></Lightbulb>
          : <LightbulbSolid onClick={setTheme} className="text-light-primary fill-current w-3.5 mr-2 lg:hidden"></LightbulbSolid>
        }
      </nav>
      {children}
    </div>
  )
}
