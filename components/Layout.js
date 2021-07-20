import Head from 'next/head'
import LayoutLeftSide from './LayoutLeftSide'
import LayoutRightSide from './LayoutRightSide'

export default function Home ({ children }) {
  return (
    <>
      <Head>
        <title>Washington Junior</title>
        <meta name="description" content="My personal portfolio and blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container m-auto h-full md:h-screen flex flex-col px-4 py-14 md:pt-20 md:flex-row md:overflow-hidden">
        <LayoutLeftSide />
        <LayoutRightSide>
          { children }
        </LayoutRightSide>
      </div>
    </>
  )
}
