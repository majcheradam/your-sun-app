import Link from 'next/link'
import Image from 'next/image'
import Button from '@mui/material/Button'

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/" aria-label="Wróć do menu głównego">
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
              <Link href="/about-us">O nas</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
