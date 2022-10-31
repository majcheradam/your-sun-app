import Link from 'next/link'
import Image from 'next/image'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  console.log(router)
  return (
    <header>
      <div>
        <Link href="/" aria-label="Wróć do menu głównego">
          <meta
            name="description"
            content="By: Mleczni ludzie from ZS2 Łańcut"
          />
          <Image src="/logo.svg" alt="" width={68} height={68} priority />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Button className="button">
              <Link href="/solar-dynamics-observatory">
                Solar Dynamics Observatory
              </Link>
            </Button>
          </li>
          <li>
            <Button className="button">
              <Link href="/parker-solar-probe">Parker Solar Probe</Link>
            </Button>
          </li>
          <li>
            <Button className="button">
              <Link href="https://mleczni.pl">O nas</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
