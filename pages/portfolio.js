import PropTypes from 'prop-types'
import PortfolioCard from '../components/PortofolioCard'
import Layout from 'components/Layout'
import Head from 'next/head'

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
    <div className="portfolio-container h-full lg:overflow-scroll lg:pb-20">
      <Head>
        <title>{'Portfolio | Washington Junior'}</title>
        <meta name="description" content="Veja alguns dos meus projetos." />
      </Head>

      {data.map(item => (
        <PortfolioCard
          key={item.id}
          lang={item.language}
          describe={item.describe}
          title={item.name}
          homepage={item.page || item.git}
          hasPublicPage={item.page}
        />
      ))}
    </div>
  )
}

/* eslint-disable react/display-name */
Portfolio.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)

export async function getStaticProps () {
  const res = await fetch('https://api.github.com/users/washingtonj/repos', { headers: { Authorization: 'Ot9wSZbE2QsBziFAK7Wt6AkWZ-q2dVuLolRe-8klxhAnnXOx' } })
  const data = await res.json()

  const projects = data.map(item => ({
    id: item.id,
    name: item.name,
    language: item.language,
    describe: item.description,
    page: item.homepage,
    git: item.html_url
  }))

  return {
    props: {
      data: projects
    },
    // days
    revalidate: 7 * 86400
  }
}
