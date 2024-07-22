
import Link from 'next/link'
import FavoriteCard from './components/FavoriteCard'

export default function Home() {
  return (
<main>
  <h1>Hello World</h1>
<Link href='/users'>Users</Link>
<FavoriteCard/>
</main>
  )
}
