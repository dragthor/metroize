import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

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
          The <a href="https://en.wikipedia.org/wiki/TRS-80" target="_blank">TRS-80</a>. I remember hanging out at the local Radio Shack entering silly programs to output childish phrases on the TV screen in an infinite loop. Most of the salesmen kept an eye on me whenever entering the store. Fortunately, my middle school purchased a computer and I learned <a href="https://en.wikipedia.org/wiki/Logo_%28programming_language%29" target="_blank">Logo</a> to instruct a turtle to draw lines and circles on the screen. It wasn’t magic after after all!
        </div>

        <h2>First decent program written?</h2>
        <div>
          In middle school I disliked studying for history tests. So I developed (in BASIC) a multiple choice quiz that randomly selected questions and randomized answer choices. At the end, it summed up your score and told the user (which was just me) which ones I got wrong. I regret losing the 5.25 inch floppy and not entering my program in the school science fair. It would have been so much better than a typical volcano project.
        </div>

        <h2>First computer owned?</h2>

        <div>The <a href="https://en.wikipedia.org/wiki/Commodore_64" target="_blank">Commodore 64</a> with the floppy and tape drives. I spent a lot of time entering programs from <a href="http://www.atarimagazines.com/compute/" target="_blank">Compute! magazine</a>. The <code>DATA</code> was exteremly frustration! And I copied games like crazy (using both sides of the floppy) as well as learning BASIC. Summer Games, Winter Games, and Impossible Mission which was one of the first games to synthesize voice using the famous <a href="https://www.c64-wiki.com/wiki/SID" target="_blank">SID chip</a> that made it possible - "<a href="https://www.youtube.com/watch?v=k35dUj5kG90" target="_blank">Another visitor. Stay a while. Stay forever!</a>"</div>

        <h2>High school?</h2>

        <div>I joined the computer club. Unfortunately, it was mostly <a href="https://en.wikipedia.org/wiki/Wang_Laboratories">Wang</a> terminals, word processing, and setting UNIX directory permissions <code>-rwx</code>. I wanted to program games, a D&D dice roller, hangman, and text-based adventures (like <a href="https://en.wikipedia.org/wiki/Zork" target="_blank">Zork</a>).</div>

        <h2>College?</h2>

        <div><a href="https://www.lvc.edu/" target="_blank">Undergraduate</a> courses used mostly Assembly, C, C++, and Pascal. <a href="https://www.du.edu/" target="_blank">Graduate</a> courses were mostly Java and C#.</div>

        <h2>First professional job?</h2>

        <div>C++, <a href="https://en.wikipedia.org/wiki/Visual_Basic" target="_blank">Visual Basic</a> (VB3, VB4, VB5, and VB6) in 1996 for a pharmaceutical sofware company that used the <a href="https://en.wikipedia.org/wiki/Waterfall_model" target="_blank">waterfall model</a> (we were regulated by the Food and Drug Administration).</div>

        <h2>Will I ever stop programming?</h2>

        <div>No.</div>

        <h2>Even if you won the lottery you wouldn’t stop coding?</h2>

        <div>Nope.  I do not play the lottery.  Instead, I <a href="https://passiveoption.com/" target="_blank">sell puts</a>.</div>


      </main>



    </Layout>
  )
}
