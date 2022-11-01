import Head from 'next/head'

const Page = () => {
  return (
    <main>
      <Head>
        <title>Parker Solar Probe | YourSun</title>
      </Head>
      <div className="iframe-container">
        <iframe
          title="Parker Solar Probe"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          frameBorder={0}
          src="https://sketchfab.com/models/41b4784c68cf4552807d0d037bb68e59/embed?autostart=1&ui_theme=dark&dnt=1"
        />
      </div>
      <div className="wrapper description">
        Amerykańska sonda wysłana w ramach programu Living with a Star
        (polegającym na poprawianiu zrozumienia tego, jak i dlaczego Słońce się
        zmienia, jak reaguje na to Ziemia i Układ Słoneczny oraz jak ta
        zmienność i reakcja wpływa na ludzkość w kosmosie i na Ziemi). Sonda ta
        będzie obserwować pole magnetyczne, plazmę i cząsteczki o wysokiej
        energii występujące w heliosferze.
        <br />
        <br />
        Celem tej misji jest zrozumienie jak podgrzewana jest korona i jak
        przyśpiesza wiatr słoneczny oraz cząstki o wysokiej energii. Sonda
        wystawiona będzie na ekstremalne warunki- temperaturę sięgającą 1400°C
        oraz ogromne promieniowanie. Ochronę przed nimi zapewni osłona termiczna
        wykonana z kompozytów węglowych, której powierzchnia skierowana w stronę
        Słońca i pomalowana odbijającą promieniowanie farbą osłoni kadłub
        nagrzewający się jedynie do 30°C.
        <br />
        <br />
        Kadłub ma kształt heksagonalny, umieszczone są na nim instrumenty
        naukowe i cztery rozkładane anteny fal plazmowych.Projekt nazwany jest
        po dr Eugene Parker, który jako pierwszy przewidział występowanie
        zjawiska wiatru słonecznego.
      </div>
    </main>
  )
}

export default Page
