import PropTypes from 'prop-types'
import PortfolioCard from '../components/PortofolioCard'
import Layout from 'components/Layout'
import Head from 'next/head'
import DataMock from 'assets/mocks/portfolio.json'

Portfolio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    language: PropTypes.string,
    describe: PropTypes.string,
    name: PropTypes.string,
    page: PropTypes.string,
    git: PropTypes.string
  }))
}

export default function Portfolio ({ data }) {
  return (
    <ul className="portfolio-container h-full lg:overflow-scroll lg:pb-20 overflow-x-hidden">
      <Head>
        <title>{'Portfolio | Washington Junior'}</title>
        <meta name="description" content="Veja alguns dos meus projetos." />
      </Head>

      {data.map((item, index) => (
        <PortfolioCard
          key={item.id}
          lang={item.language}
          describe={item.describe}
          title={item.name}
          homepage={item.page || item.git}
          hasPublicPage={item.page}
          position={index}
        />
      ))}
    </ul>
  )
}

/* eslint-disable react/display-name */
Portfolio.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)

export async function getStaticProps () {
  let projects = []
  const mapper = (data) => data.map(item => ({
    id: item.id,
    name: item.name,
    language: item.language,
    describe: item.description,
    page: item.homepage,
    git: item.html_url
  }))

  if (process.env.NODE_ENV === 'development') {
    // For Dev
    projects = mapper(DataMock)
  } else {
    // For Prod
    const res = await fetch('https://api.github.com/users/washingtonj/repos', { headers: { Authorization: process.env.GITHUB_TOKEN || '' } })
    const data = await res.json()
    projects = mapper(data)
  }

  return {
    props: {
      data: projects
    },
    // days
    revalidate: 7 * 86400
  }
}
