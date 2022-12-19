import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <main>
      <Head>
        <title>Solar Dynamics Observatory | YourSun</title>
      </Head>
      <div className="video-container">
        <Image className="img" src="/us.jpg" alt="" width={550} height={550} />
      </div>
      <div className="wrapper description">
        <br />
        Cześć! Jesteśmy grupką znajomych, która zajęła 2. miejsce w NASA Space
        Apps Challenge Rzeszów 2022 i wygrała jako najlepszy projekt w kategorii
        uczniowskiej. 🎉
        <br />
        <br />
        Teraz chcemy rozwijać nasz projekt i przy tym dobrze się bawić! Mamy
        nadzieję, że zainteresujemy was naszym projektem i podejściem do tematu.
        😁
      </div>
      <Link
        href="https://www.instagram.com/mleczni_ludzie/"
        style={{ color: '#add8e6' }}
      >
        <p>Nasz Instagram ✨</p>
      </Link>
    </main>
  )
}

export default Page
