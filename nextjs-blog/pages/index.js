import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>


        <p className="description">
          
          Let's get this party started.
          
          <code>var z = 100;</code>
        </p>

        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>

      </main>

  
  
    </Layout>
  )
}
