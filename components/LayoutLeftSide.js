import { useContext } from 'react'
import { CodeSandbox, LinkedIn, GitHub, Lightbulb, LightbulbSolid } from 'assets/icons'
import { Theme } from 'context/theme'
import { motion } from 'framer-motion'

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
    <div className="mb-8 lg:w-5/12 lg:flex lg:flex-col">
      <div className="lg:flex-1">
        <motion.h1
          className="text-light-primary dark:text-dark-primary font-extrabold text-5xl lg:w-56"
          initial={false}
          animate={{ animation: 'fadeIn', animationDuration: '2s' }}
        >
          {"Hi, I'm Washington Junior"}
        </motion.h1>
        <div className="social-container flex my-8">
          {data.socials.map((social, index) => (
            <motion.button
              className="p-4 rounded-full cursor-pointer bg-light-primary bg-opacity-10 dark:bg-dark-secundary transition-colors"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ durantion: 0.5, delay: index * 0.2 }}
              key={social.name}>
              <social.icon
                className="w-4 text-light-primary dark:text-dark-primary fill-current"
                title={social.name}
                onClick={() => window.open(social.url, '_blank')}
              />
            </motion.button>
          ))}
        </div>
        <div className="subs-container text-base font-medium">
          {data.subs.map((sub, idx) => <p key={idx}>{sub}</p>)}
        </div>
      </div>
      <div>
        <motion.button
          className="stretch hidden lg:inline-flex items-center px-3 py-2.5 rounded-full bg-light-primary dark:bg-dark-secundary"
          initial={{ animationName: 'backInUp', animationDuration: '1s' }}
          onClick={setTheme}>
          {theme === 'dark'
            ? <Lightbulb className="fill-current w-2.5 text-white dark:text-dark-primary"></Lightbulb>
            : <LightbulbSolid className="fill-current w-2.5 text-white"></LightbulbSolid>
          }
          <span className="text-xs text-white">
            {theme === 'dark' ? 'Ligar a luz' : 'Desligar a luz'}
          </span>
        </motion.button>
      </div>
    </div>
  )
}
