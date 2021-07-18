import { useEffect, useRef } from 'react'
import { CodeSandbox, LinkedIn, GitHub } from 'assets/icons'
import Head from 'next/head'
import Card from 'components/Card'

const data = {
  socials: [
    { name: 'LinkedIn', url: '', icon: LinkedIn },
    { name: 'GitHub', url: '', icon: GitHub },
    { name: 'CodeSandbox', url: '', icon: CodeSandbox }
  ],
  subs: [
    'Minhas ideias e soluções criam vida através da tecnologia. 📱',
    'Se ensinar também é uma forma de aprender, então estou sempre praticando. 🎓',
    'Meu trabalho também é meu Hobbie, então me traga desafios. ✅'
  ]
}

export default function Home ({ projects }) {
  const navRef = useRef(null)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isValid = window.scrollY > 450
      navRef.current.classList.toggle('nav-menu-stick', isValid)
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Washington Junior</title>
        <meta name="description" content="My personal portfolio and blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen min-h-screen p-10 bg-theme-background">
        <div className="mb-8">
          <h1 className="text-theme-primary font-extrabold text-5xl">Hi, Im Washington Junior</h1>
          <div className="social-container flex my-8">
            {data.socials.map(social => (
              <social.icon
                className="w-6 cursor-pointer text-theme-primary fill-current"
                key={social.name}
                title={social.name}
                onClick={() => console.log(social.url)}
              />
            ))}
          </div>
          <div className="subs-container text-base font-medium text-theme-secundary">
            {data.subs.map((sub, idx) => <p key={idx}>{sub}</p>)}
          </div>
        </div>
        <div className="relative">
          <nav ref={navRef} className="nav-menu mb-4">
            <a className="text-xl uppercase font-extrabold text-theme-primary text-opacity-25">Sobre</a>
            <a className="text-xl uppercase font-extrabold text-theme-primary">Portfolio</a>
          </nav>
          <div className="portfolio-container">
            { projects.map(proj => (
              <Card
                key={proj.id}
                lang={proj.language}
                describe={proj.describe}
                title={proj.name}
                homepage={proj.page || proj.git}
                hasPublicPage={proj.page}
                />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetch('https://api.github.com/users/washingtonj/repos')
  const data = await res.json()

  const projects = data.map(item => ({
    id: item.id,
    name: item.name,
    language: item.language,
    describe: item.description,
    page: item.homepage,
    git: item.html_url
  }))

  return {
    props: {
      projects
    },
    // days
    revalidate: 7 * 86400
  }
}
