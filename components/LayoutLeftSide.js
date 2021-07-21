import { CodeSandbox, LinkedIn, GitHub } from 'assets/icons'

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
  return (
    <div className="mb-8 md:pr-28 md:w-3/6 ">
      <h1 className="text-theme-primary font-extrabold text-5xl md:w-56">
        {"Hi, I'm Washington Junior"}
      </h1>
      <div className="social-container flex my-8">
        {data.socials.map(social => (
          <div
            className="p-4 rounded-full cursor-pointer bg-theme-secundary bg-opacity-10 transition-colors"
            key={social.name}>
            <social.icon
              className="w-4 text-theme-primary fill-current"
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
  )
}
