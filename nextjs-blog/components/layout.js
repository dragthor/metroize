import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Kris Krause'
export const siteTitle = 'metroize'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Software development blog by Kris Krause"
                />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile.png"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}

                <div className="navbar">
                    <Link href="/">Home</Link> | <Link href="/about">About</Link> | <a href="https://www.linkedin.com/in/kris-krause/" target="_blank">LinkedIn</a> | <a href="https://github.com/dragthor" target="_blank">Github</a> | <a href="http://stackoverflow.com/users/139547/kris-krause" target="_blank">Stackoverflow</a>
                </div>

            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}

            <footer>
                <div className="navbar">
                    <Link href="/">Home</Link> | <Link href="/about">About</Link> | <a href="https://www.linkedin.com/in/kris-krause/" target="_blank">LinkedIn</a> | <a href="https://github.com/dragthor" target="_blank">Github</a> | <a href="http://stackoverflow.com/users/139547/kris-krause" target="_blank">Stackoverflow</a>
                </div>

                <div className="disclaimer">
                    Disclaimer: The opinions expressed here represent my own and not those of my employer.
                </div>
            </footer>
        </div>
    )
}
