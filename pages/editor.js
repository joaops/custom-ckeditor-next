import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const CustomEditor = dynamic(() => import('../components/CustomEditor'), { ssr: false })

import styles from '../styles/Home.module.scss'

export default function Editor() {
    const [contents, setContents] = useState('')

    const handleReady = (editor) => {
        // console.log('onReady')
        setContents('<h2>Título 1</h2><h3>Título 2</h3><p>Parágrafo</p>')
    }

    const handleChange = (event, editor) => {
        // console.log('onChange')
        const data = editor.getData()
        setContents(data)
    }

    const handleBlur = (event, editor) => {
        // console.log('onBlur')
    }

    const handleFocus = (event, editor) => {
        // console.log('onFocus')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Custom CKEditor Next</title>
                <meta name="description" content="Custom CKEditor Next" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Custom CKEditor Next</h1>
            <CustomEditor data={contents} onReady={handleReady} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
            <div dangerouslySetInnerHTML={{ __html: contents }} />
        </div>
    )
}
