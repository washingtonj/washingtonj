import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <main className="w-screen min-h-screen bg-theme-background text-theme-secundary">
      {getLayout(<Component {...pageProps} />)}
    </main>
  )
}

export default MyApp
