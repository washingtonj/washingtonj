export default function About () {
  return (
    <div className="text-theme-secundary">
      <div className="mb-8">
        <p className="mb-2">{'Como você já deve saber, me chamo Washington, ou Junior caso ache mais fácil. Nascido em 12 de Outubro de 1996, "Sim, no dia das crianças", sou um autodidata apaixonado por tecnologia e inovação.'}</p>
        <p>{'Sou formado em Rede de Computadores pela Universidade Cidade de São Paulo, "Sim, eu estudei a tabela OSI", mas meu interesse por infraestrutura e pela cultura DevOps somadas a vontade de aprender e a facilidade de adaptação, me tornaram também um desenvolvedor.'}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">O que utilizo</h2>
        <p className="mb-2">Atualmente minha linguagem principal é o Javascript, sendo ela utilizada em todas as frentes como BackEnd com NodeJS, FrontEnd com React e Vue, Mobile com React Native e Desktop com Electron. </p>
        <p>Para estilização utilizo de recursos de pré processadores de CSS como SASS/SCSS somado ao padrão BEM ou frameworks CSS como TailwindCSS, além de bibliotecas CSS-in-JS como Styled Components e Emotion.</p>
      </div>
    </div>
  )
}
