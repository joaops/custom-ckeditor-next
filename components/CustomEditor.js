import Editor from 'ckeditor5-custom-build'
import { CKEditor } from '@ckeditor/ckeditor5-react'

export default function CustomEditor({ data, onReady, onChange, onBlur, onFocus }) {

    const editorConfiguration = {
        toolbar: {
            items: [
                'heading',
                'fontFamily',
                'fontSize',
                'alignment',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'subscript',
                'superscript',
                'fontColor',
                'fontBackgroundColor',
                'highlight',
                'removeFormat',
                '|',
                'horizontalLine',
                'bulletedList',
                'numberedList',
                'todoList',
                'outdent',
                'indent',
                '|',
                'link',
                'blockQuote',
                'code',
                'codeBlock',
                'imageInsert',
                'insertTable',
                'mediaEmbed',
                'undo',
                'redo'
            ]
        },
        language: 'pt-br',
        image: {
            toolbar: [
                'imageTextAlternative',
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                'linkImage'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableCellProperties',
                'tableProperties'
            ]
        }
    }

    // Do To:
    // Implementar o Adaptador de Upload de Imagens no Firebase Storage

    const handleReady = (editor) => {
        console.log('onReady')
        // Desativar o Upload de Imagens em Base64
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            // return new MyUploadAdapter(loader)
            return null
        }
        onReady(editor)
    }

    return (
        <CKEditor
            editor={Editor}
            config={editorConfiguration}
            data={data}
            onReady={handleReady}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus} />
    )
}