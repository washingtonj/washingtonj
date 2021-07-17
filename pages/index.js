import Head from 'next/head'
import Card from 'components/Card'
import { CodeSandbox, LinkedIn, GitHub } from 'assets/icons'

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

export default function Home () {
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
        <div>
          <nav className="nav-menu text-theme-primary text-xl mb-4 font-extrabold uppercase">
            <a>Sobre</a>
            <a>Portfolio</a>
          </nav>
          <div className="portfolio-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  )
}
