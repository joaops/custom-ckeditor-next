# Custom CKEditor Next

Criar um novo projeto next:
```bash
npx create-next-app custom-ckeditor-next
```

Acessar o site [online-builder](https://ckeditor.com/ckeditor-5/online-builder/) e gerar um editor customizado.

> Ao escolher os Plugins, tome cuidado pois alguns podem quebrar o seu componente, fazendo com que ele não seja carregado. Se acaso os plugins que você escolheu não funcionaram, tente usar o editor com poucos plugins e então vá adicionando aos poucos para saber quais plugins estão funcionando e quais deles estão quebrando o componente.

Criar a pasta `ckeditor5` dentro do projeto e extrair os arquivos do zip do editor dentro dela.

Instalar as dependências no projeto:
```bash
npm i sass
npm i highlight.js
npm i @ckeditor/ckeditor5-react
```

Instalar o Editor Customizado no Projeto:
```bash
npm add file:./ckeditor5
```

Mudar os arquivos `css` para `scss` e atualizar as importações.

Remover o código glichê gerado pelo next nos arquivos `./pages/index.js` e `./styles/Home.module.scss`, convertendo em uma página simples.

`./styles/Home.module.scss`
```sass
.container {
    padding: 0 2rem;
}

@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
```

`./pages/index.js`
```js
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Custom CKEditor Next</title>
                <meta name="description" content="Custom CKEditor Next" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Custom CKEditor Next</h1>
        </div>
    )
}
```

Criar a pasta `components` na raiz do projeto.

Criar o componente `CustomEditor` dentro da pasta `components`.

`./components/CustomEditor.js`
```js
import Editor from 'ckeditor5-custom-build'
import { CKEditor } from '@ckeditor/ckeditor5-react'

export default function CustomEditor({ data, onReady, onChange, onBlur, onFocus }) {

    const editorConfiguration = {}

    return (
        <CKEditor
            editor={Editor}
            config={editorConfiguration}
            data={data}
            onReady={onReady}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus} />
    )
}
```

Abra o arquivo `./ckeditor5/src/ckeditor.js` e copie a configuração do `Editor.defauldConfig` para dentro da variável `editorConfiguration`.

Crie a página `./pages/editor.js` e adicione o componente `CustomEditor` dentro dela.

`./pages/editor.js`
```js
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const CustomEditor = dynamic(() => import('../components/CustomEditor'), { ssr: false })

import styles from '../styles/Home.module.scss'

export default function Editor() {
    const [contents, setContents] = useState('')

    const handleReady = (editor) => {
        // console.log('onReady')
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
```

> É necessário carregar o componente `CustomEditor` usando o `dynamic` com `ssr: false` para que o mesmo não seja carregado no lado do servidor. Esse componente deve ser carregado apenas no lado do cliente.