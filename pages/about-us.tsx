import Head from 'next/head'
import Image from 'next/image'

const Page = () => {
  return (
    <main>
      <Head>
        <title>Solar Dynamics Observatory | YourSun</title>
      </Head>
      <div>
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
    </main>
  )
}

export default Page
