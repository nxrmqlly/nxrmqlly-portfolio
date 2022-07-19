import Link from 'next/link'
import styles from '../../styles/navbar.module.css'

const CustomLink = <Link className={styles.custom_link} />

const Navbar = () => {
    return (<>
        <nav className={styles.main_nav}>
            <Link href="/home">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/works">
                <a>Works</a>
            </Link>
            <Link href="/socials">
                <a>Socials</a>
            </Link>
        </nav>
    </>)
}

export default Navbar