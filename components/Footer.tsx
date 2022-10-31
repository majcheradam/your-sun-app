import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="wrapper">
      <p className="desc">
        Dzięki uprzejmości NASA/SDO oraz zespołów naukowych AIA, EVE i HMI.
      </p>

      <Link href="https://mleczni.pl">
        <p>© Mleczni Ludzie</p>
      </Link>
    </footer>
  )
}
