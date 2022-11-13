import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import homeStyles from '../styles/home.module.css'

const logo = 'Coder'
const name = 'grhn'
export const mail = 'grhnozturk@gmail.com'
export const github = 'https://github.com/Anethra'

export default function Layout ({ children }) {
    return (
        <div className={homeStyles.container}>
            <Head>
                <title>GRHN</title>
            </Head>
            <div className={styles.logo}>
                <Link href="/"><h2>{logo}<span>{name}</span></h2></Link>
            </div>
            <div>
                <ul className={styles.nav}>
                    <li>
                        <Link href="/pages/about">About me</Link>
                    </li>
                    <li>
                        <Link href="/pages/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/pages/contact">Contact</Link>
                    </li>
                </ul>
            </div>      
            <main>
                {children}
            </main>
        </div>
    )
}