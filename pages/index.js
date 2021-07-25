import Layout from 'components/Layout'
import { motion } from 'framer-motion'

const describes = [{
  paragraphs: [
    { __html: 'Como você já deve saber, me chamo Washington, ou Junior caso ache mais fácil. Nascido em 12 de Outubro de 1996, "Sim, no dia das crianças", sou um autodidata apaixonado por tecnologia e inovação.' },
    { __html: 'Sou formado em Rede de Computadores pela Universidade Cidade de São Paulo, "Sim, eu estudei a tabela OSI", mas meu interesse por infraestrutura e pela cultura DevOps somadas a vontade de aprender e a facilidade de adaptação, me tornaram também um desenvolvedor.' }
  ]
},
{
  title: 'O que utilizo',
  paragraphs: [
    { __html: 'Atualmente minha linguagem principal é o <cite>Javascript</cite>, sendo ela utilizada em todas as frentes como BackEnd com <cite>NodeJS</cite>, FrontEnd com <cite>React</cite> e <cite>Vue</cite>, Mobile com <cite>React Native</cite> e Desktop com <cite>Electron</cite>.' },
    { __html: 'Para estilização utilizo de recursos de pré processadores de CSS como <cite>SASS/SCSS</cite> somado ao padrão <cite>BEM</cite> ou frameworks CSS como <Tag>Tailwind</Tag>, além de bibliotecas CSS-in-JS como <Tag>Styled Components</Tag>.' }
  ]
}
]

// Passar para CSS
// const Tag = ({ children }) => (
//   <cite className="py-0.5 px-1 mx-0.5 text-sm rounded not-italic bg-light-primary bg-opacity-10 dark:bg-dark-primary dark:bg-opacity-10">
//     {children}
//   </cite>
// )

export default function About () {
  return (
    <div className="overflow-x-hidden">
      {describes.map((item, index) =>
        <motion.div key={index} animate={{ animationName: 'slideInDown', animationDuration: '0.75s' }}>
          { item.title && <h2 className="text-xl font-bold mb-4 text-light-primary dark:text-dark-primary">{item.title}</h2> }
          { item.paragraphs.map((p, index) => <p key={index} className="mb-2" dangerouslySetInnerHTML={p}></p>) }
        </motion.div>
      )}
    </div>
  )
}

/* eslint-disable react/display-name */
About.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
