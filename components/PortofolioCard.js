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
      className="flex flex-col w-full h-32 p-4 rounded cursor-pointer bg-light-secundary dark:bg-dark-secundary shadow-md overflow-hidden"
      onClick={() => open()}
    >
      <div className="flex items-center">
        <h2 className="text-lg font-extrabold uppercase overflow-ellipsis whitespace-nowrap overflow-hidden text-light-primary dark:text-gray-50">
          {title}
        </h2>
        <span className="flex items-center ml-2">
          {langProps &&
            <p
              className="text-xs font-bold rounded py-0.5 px-1 text-white"
              style={{ backgroundColor: langProps.color }}>
              {langProps.dot}
            </p>}
          {hasPublicPage && <Public className="w-3.5 ml-2 stroke-current text-gray-400 dark:text-gray-50" title="On Air" />}
        </span>
      </div>
      <div className="text-sm mt-2 overflow-auto text-gray-600 dark:text-gray-200">
        <p>{describe || 'Este projeto esta em desenvolvimento e ainda não tem uma descrição.'}</p>
      </div>
    </div>
  )
}
