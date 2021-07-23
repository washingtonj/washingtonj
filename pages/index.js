import Layout from 'components/Layout'

const Tag = ({ children }) => (
  <cite className="py-0.5 px-1 mx-0.5 text-sm rounded not-italic bg-light-primary bg-opacity-10 dark:bg-dark-primary dark:bg-opacity-20 ">
    {children}
  </cite>
)

export default function About () {
  return (
    <div>
      <div className="mb-8">
        <p className="mb-2">{'Como você já deve saber, me chamo Washington, ou Junior caso ache mais fácil. Nascido em 12 de Outubro de 1996, "Sim, no dia das crianças", sou um autodidata apaixonado por tecnologia e inovação.'}</p>
        <p>{'Sou formado em Rede de Computadores pela Universidade Cidade de São Paulo, "Sim, eu estudei a tabela OSI", mas meu interesse por infraestrutura e pela cultura DevOps somadas a vontade de aprender e a facilidade de adaptação, me tornaram também um desenvolvedor.'}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 text-light-primary dark:text-dark-primary">O que utilizo</h2>
        <p className="mb-2">Atualmente minha linguagem principal é o <Tag>Javascript</Tag>, sendo ela utilizada em todas as frentes como BackEnd com <Tag>NodeJS</Tag>, FrontEnd com <Tag>React</Tag> e <Tag>Vue</Tag>, Mobile com <Tag>React Native</Tag> e Desktop com <Tag>Electron</Tag>. </p>
        <p>Para estilização utilizo de recursos de pré processadores de CSS como <Tag>SASS/SCSS</Tag> somado ao padrão <Tag>BEM</Tag> ou frameworks CSS como <Tag>Tailwind</Tag>, além de bibliotecas CSS-in-JS como <Tag>Styled Components</Tag>.</p>
      </div>
    </div>
  )
}

/* eslint-disable react/display-name */
About.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
