import Head from 'next/head'
import LayoutLeftSide from './LayoutLeftSide'
import LayoutRightSide from './LayoutRightSide'
import { Theme } from 'context/theme'
import { useContext } from 'react'

export default function Home ({ children }) {
  const [theme] = useContext(Theme)

  return (
    <>
      <Head>
        <title>Washington Junior</title>
        <meta name="description" content="Minhas ideias e soluções criam vida através da tecnologia." />
        <link rel="icon" href={`/${theme}/favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`/${theme}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/${theme}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/${theme}favicon-16x16.png`} />
        <link rel="mask-icon" href={`/${theme}/safari-pinned-tab.svg`} color="#5bbad5" />
      </Head>

      <div className="container m-auto h-full lg:h-screen flex flex-col justify-between px-4 md:px-24 py-14 lg:pt-20 lg:flex-row lg:overflow-hidden">
        <LayoutLeftSide />
        <LayoutRightSide>
          {children}
        </LayoutRightSide>
      </div>
    </>
  )
}
