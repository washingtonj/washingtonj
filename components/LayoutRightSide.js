import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const pages = [
  { path: '/', name: 'sobre' },
  { path: '/portfolio', name: 'portfolio' }
]

export default function LayoutRightSide ({ children }) {
  const navRef = useRef()
  const route = useRouter()

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isValid = window.scrollY > 450
      navRef.current.classList.toggle('nav-menu-stick', isValid)
    })
  }, [])

  return (
    <div className="relative md:w-3/6">
      <nav ref={navRef} className="mb-4">
        <ul className="nav-menu flex">
          {pages.map(page => (
            <li
              key={page.name}
              className={`text-xl uppercase font-extrabold text-theme-primary 
                ${route.pathname !== page.path ? 'text-opacity-25' : ''}`
              }>
              <Link href={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  )
}
