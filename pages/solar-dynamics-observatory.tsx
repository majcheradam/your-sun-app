import Head from 'next/head'

const Page = () => {
  return (
    <main>
      <Head>
        <title>Solar Dynamics Observatory | YourSun</title>
      </Head>
      <div className="video-container-sdo">
        <video
          className="video"
          id="video"
          src="https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest48_SDO_VO3.mp4"
          playsInline
          muted
          loop
          autoPlay
          width={550}
        />
      </div>
      <div className="wrapper description">
        <br />
        👀🌞🛰️ Sonda Solar Dynamics Observatory to teleskop, który został
        wysłany w kosmos przez NASA, żeby badać Słońce 🌞. Ma on na celu lepsze
        zrozumienie tego, co dzieje się na Słońcu i jak to wpływa na Ziemię.
        Teleskop ten ma wiele różnych narzędzi, które pomagają mu zbierać dane i
        obrazy Słońca z różnych kątów i z różnych fal elektromagnetycznych.
        <br />
        <br />
        Dzięki temu możemy lepiej zrozumieć, jak Słońce wytwarza plamy słoneczne
        i fajery, a także jak te zjawiska mogą wpływać na Ziemię poprzez burze
        magnetyczne i inne zmiany pogody na naszej planecie. 🌪️🌩️🌪️🌩️🌪️
      </div>
    </main>
  )
}

export default Page
