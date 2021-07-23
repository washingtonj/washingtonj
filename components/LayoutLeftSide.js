import { useContext } from 'react'
import { CodeSandbox, LinkedIn, GitHub, Lightbulb, LightbulbSolid } from 'assets/icons'
import { Theme } from 'context/theme'

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

export default function LayoutLeftSide () {
  const [theme, setTheme] = useContext(Theme)

  return (
    <div className="mb-8 lg:pr-28 lg:w-3/ lg:flex lg:flex-col">
      <div className="lg:flex-1">
        <h1 className="text-light-primary dark:text-dark-primary font-extrabold text-5xl lg:w-56">
          {"Hi, I'm Washington Junior"}
        </h1>
        <div className="social-container flex my-8">
          {data.socials.map(social => (
            <div
              className="p-4 rounded-full cursor-pointer bg-light-primary bg-opacity-10 dark:bg-dark-secundary transition-colors"
              key={social.name}>
              <social.icon
                className="w-4 text-light-primary dark:text-dark-primary fill-current"
                title={social.name}
                onClick={() => window.open(social.url, '_blank')}
              />
            </div>
          ))}
        </div>
        <div className="subs-container text-base font-medium">
          {data.subs.map((sub, idx) => <p key={idx}>{sub}</p>)}
        </div>
      </div>
      <div
        className="lightbulb hidden cursor-pointer lg:flex items-center max-w-max px-3 py-2.5 rounded-full bg-light-primary dark:bg-dark-secundary"
        onClick={setTheme}
      >
        {theme === 'dark'
          ? <Lightbulb className="fill-current w-2.5 text-white dark:text-dark-primary"></Lightbulb>
          : <LightbulbSolid className="fill-current w-2.5 text-white"></LightbulbSolid>
        }
        <p className="hidden text-xs ml-3 text-white">{theme === 'dark' ? 'Quer acender a luz?' : 'Quer apagar a luz?'}</p>
      </div>
    </div>
  )
}
