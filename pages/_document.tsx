import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(documentContext: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = documentContext.renderPage;

    try {
      documentContext.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(documentContext);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const description = "The Next generation of a new feed";
    const fontsUrl =
      "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap";

    return (
      <Html>
        <Head>
          <meta name="description" content={description} />
          <link href={fontsUrl} rel="stylesheet" />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
