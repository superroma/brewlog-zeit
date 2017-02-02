import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
//  static async getInitialProps (ctx) {
//    const props = await Document.getInitialProps(ctx)
//    return { ...props, customValue: 'hi there!' }
//  }

  render () {
    return (
     <html>
       <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" 
        content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" 
        />

       </Head>
       <body className="container">
         <Main />
         <NextScript />
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
       </body>
     </html>
    )
  }
}