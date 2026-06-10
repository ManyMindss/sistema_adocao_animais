import Link from 'next/link';
import styles from './Header.module.css';

const links = [
  { href: '/', label: 'Início' },
  { href: '/animais', label: 'Animais' },
  { href: '/ong', label: 'ONGs' },
  { href: '/adotante', label: 'Adotantes' },
  { href: '/auth/login', label: 'Login' },
  { href: '/auth/cadastro', label: 'Cadastro' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Adota Pet
      </Link>
      <nav className={styles.nav}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
