import '../styles/globals.css'
import ThemeContext from 'context/theme'

function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeContext>
      <main className="w-screen min-h-screen bg-blue-50 dark:bg-theme-background text-gray-800 dark:text-theme-secundary transition-colors">
        {getLayout(<Component {...pageProps} />)}
      </main>
    </ThemeContext>
  )
}

export default MyApp
