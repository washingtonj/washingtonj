import { useEffect, useRef } from 'react'
import { CodeSandbox, LinkedIn, GitHub } from 'assets/icons'
import Head from 'next/head'
import Card from 'components/Card'

const data = {
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/washington-junior-7136a8101', icon: LinkedIn },
    { name: 'GitHub', url: 'https://github.com/washingtonj', icon: GitHub },
    { name: 'CodeSandbox', url: 'https://codesandbox.io/u/washingtonj', icon: CodeSandbox }
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
    <main className="w-screen min-h-screen md:h-screen bg-theme-background">
      <Head>
        <title>Washington Junior</title>
        <meta name="description" content="My personal portfolio and blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container m-auto h-full flex flex-col p-4 md:pt-20 md:flex-row md:overflow-hidden">
        {/* aside */}
        <div className="mb-8 md:mr-28">
          <h1 className="text-theme-primary font-extrabold text-5xl md:w-56">
            {"Hi, I'm Washington Junior"}
          </h1>
          <div className="social-container flex my-8">
            {data.socials.map(social => (
              <social.icon
                className="w-6 cursor-pointer text-theme-primary fill-current"
                key={social.name}
                title={social.name}
                onClick={() => window.open(social.url, '_blank')}
              />
            ))}
          </div>
          <div className="subs-container text-base font-medium text-theme-secundary">
            {data.subs.map((sub, idx) => <p key={idx}>{sub}</p>)}
          </div>
        </div>
        {/* bside */}
        <div className="relative">
          <nav ref={navRef} className="nav-menu mb-4">
            <a className="text-xl uppercase font-extrabold text-theme-primary text-opacity-25">Sobre</a>
            <a className="text-xl uppercase font-extrabold text-theme-primary">Portfolio</a>
          </nav>
          <div className="portfolio-container h-full md:overflow-scroll md:pb-20">
            {projects.map(proj => (
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
      </div>
    </main>
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
