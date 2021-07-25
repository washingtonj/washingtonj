import { Public } from 'assets/icons'
import { motion } from 'framer-motion'

const filesProp = {
  javascript: { dot: 'JS', color: '#FBB03B' },
  typescript: { dot: 'TS', color: '#2A6AB9' },
  python: { dot: 'PY', color: '#2F679B' },
  dockerfile: { dot: 'DOCKER', color: '#49565C' },
  vue: { dot: 'VUE', color: '#39AF78' }
}

export default function Card ({ title, lang, describe, homepage, hasPublicPage, ...props }) {
  const langProps = lang && filesProp[lang.toLowerCase()]

  function open () {
    window.open(homepage, '_blank')
  }

  return (
      <motion.li
        tabIndex={0}
        className="flex flex-col h-32 py-5 px-4 md:px-8 rounded cursor-pointer border-2 border-transparent bg-light-secundary dark:bg-dark-secundary shadow-md overflow-hidden hover:border-light-primary dark:hover:border-dark-primary transition-colors duration-500"
        onClick={open}
        initial={{ x: '150%' }}
        animate={{ x: '0%' }}
        transition={{ delay: props.position * 0.05, duration: 1 }}
        {...props}
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
      </motion.li>
  )
}
