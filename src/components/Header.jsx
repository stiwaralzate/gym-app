import { Link, Route } from 'wouter'


function Header() {
  return (
    <header>
        <figure>
            <img src="/vite.svg" alt="" />
        </figure>
        <nav>
            <Link href='/beginner'>Beginner</Link>
            <Link href='/intermediate'>Intermediate</Link>
            <Link href='/advanced'>Advanced</Link>
        </nav>
    </header>
  )
}

export default Header