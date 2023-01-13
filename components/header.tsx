import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <>
      <nav className={styles.nav}>
        <div className='container'>
            <ul className={styles.navList}>
                <li className={styles.logo + ' ' + styles.navItem}>
                    <Link href="/">
                            <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </Link>
                </li>
                <li className={styles.signUp + ' ' + styles.navItem}>
                    <Link href="/sign-up">
                        Sign Up
                    </Link>
                </li>
                <li className={styles.arenas + ' ' + styles.navItem}>
                    <Link href="/arenas">
                    Find your arena
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}
