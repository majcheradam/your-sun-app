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
        Solar Dynamics Observatory jest pierwszą misją, która zostanie
        uruchomiona w ramach programu NASA Living With a Star (LWS), programu
        zaprojektowanego w celu zrozumienia przyczyn zmienności Słońca i jej
        wpływu na Ziemię. SDO ma pomóc nam zrozumieć wpływ Słońca na Ziemię i
        przestrzeń bliską Ziemi poprzez badanie atmosfery słonecznej w małych
        skalach przestrzeni i czasu oraz w wielu długościach fal jednocześnie.
        <br />
        <br />
        Celem SDO jest zrozumienie, zmierzając w kierunku zdolności
        przewidywania, zmian słonecznych, które wpływają na życie na Ziemi i
        systemy technologiczne ludzkości poprzez określenie jak generowane i
        zorganizowane jest pole magnetyczne Słońca oraz jak ta zmagazynowana
        energia magnetyczna jest przekształcana i uwalniana do heliosfery i
        geoprzestrzeni w postaci wiatru słonecznego, cząstek energetycznych i
        zmian napromieniowania słonecznego.
      </div>
    </main>
  )
}

export default Page
