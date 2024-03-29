import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                </Head>
                <body className='dark:bg-gray-800'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument