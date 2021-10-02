import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">About</h1>


        <div>
          Hi. My name is Kris Krause. I write software. Language and platform? Depends on the problem.
        </div>
        <h2>First computer programmed?</h2>
        <div>
          The TRS-80. I remember hanging out at the local Radio Shack entering silly programs to output childish phrases on the TV screen in an infinite loop. Most of the salesmen kept an eye on me whenever entering the store. Fortunately, my Catholic middle school purchased a computer and I learned Logo to instruct a turtle to draw lines and circles on the screen. It wasn’t magic after after all!
        </div>

        <h2>First decent program written?</h2>
        <div>
          In middle school I disliked studying for history tests. So I developed (in BASIC) a multiple choice quiz that randomly selected questions and randomized answer choices. At the end, it summed up your score and told the user (which was just me) which ones I got wrong. I regret losing the 5.25 inch floppy and not entering my program in the school science fair. It would have been so much better than a typical volcano project.
        </div>

      </main>
      <footer>

      </footer>


    </Layout>
  )
}
