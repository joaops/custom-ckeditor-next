import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'

export default function Home() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Custom CKEditor Next</title>
                <meta name="description" content="Custom CKEditor Next" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Home</h1>
            <Link href={`/editor`}>
                <a>Editor</a>
            </Link>
        </div>
    )
}
