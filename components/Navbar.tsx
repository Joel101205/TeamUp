import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href="/" scroll={false}>Home</Link>
            <Link href="/profile" scroll={false}>Profile</Link>
        </nav>
    )
}