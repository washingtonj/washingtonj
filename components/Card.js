import { Public } from 'assets/icons'

const filesProp = {
  javascript: { dot: 'JS', color: '#FBB03B' },
  typescript: { dot: 'TS', color: '#2A6AB9' },
  python: { dot: 'PY', color: '#2F679B' },
  dockerfile: { dot: 'DOCKER', color: '#49565C' },
  vue: { dot: 'VUE', color: '#39AF78' }
}

export default function Card ({ title, lang, describe, homepage, hasPublicPage }) {
  const langProps = lang && filesProp[lang.toLowerCase()]

  function open () {
    window.open(homepage, '_blank')
  }

  return (
    <div
      className="w-full h-32 rounded p-4 cursor-pointer text-theme-tertiary bg-theme-secundary bg-opacity-25"
      onClick={() => open()}
    >
      <div className="flex items-center">
        <h2 className="text-lg font-extrabold uppercase">{title}</h2>
        <span className="ml-2">
          {langProps &&
            <p
              className="text-xs font-bold rounded py-0.5 px-1"
              style={{ backgroundColor: langProps.color }}>
              {langProps.dot}
            </p>}
        </span>
        {hasPublicPage && <Public className="w-3.5 ml-2" title="On Air" />}
      </div>
      <div className="text-sm mt-2">
        <p>{describe || 'Este projeto esta em desenvolvimento e ainda não tem uma descrição.'}</p>
      </div>
    </div>
  )
}
