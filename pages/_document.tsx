import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-LJRDP2D2RT`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LJRDP2D2RT', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Jesteśmy czteroosobową grupą z Zespołu Szkół nr 2 im. Jana Kochanowskiego w Łańcucie. Na Hackatonie podjęliśmy się wyzwania dotyczącego kreatywnego przedstawiania danych z sondy Parker Solar Probe, by rozprzestrzenić informacje na temat Słońca i badań z nim związanych. Wybraliśmy ten temat dlatego, że lubimy pracować z danymi oraz uważamy, że tematyka związana ze Słońcem jest wszystkim bliska, bo bez niego życie na Ziemi nie miałoby racji bytu a nie wszyscy mają dostęp do tych danych."
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="icon" href="/logo.svg" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
        <meta
          name="author"
          content="Design & Development Adam Majcher - adammajcher20@gmail.com"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
