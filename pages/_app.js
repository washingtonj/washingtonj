import '../styles/globals.css'
import ThemeContext from 'context/theme'

function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeContext>
      <main className="w-screen min-h-screen bg-light-background dark:bg-dark-background text-gray-700 dark:text-gray-100 transition-colors">
        {getLayout(<Component {...pageProps} />)}
      </main>
    </ThemeContext>
  )
}

export default MyApp
