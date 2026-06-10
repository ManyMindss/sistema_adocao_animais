import Link from 'next/link';
import PageShell from '@/app/components/PageShell';
import styles from '@/app/components/StatusMessage.module.css';

export default function Home() {
  return (
    <PageShell
      title="Adota Pet"
      description="Conecte ONGs, adotantes e animais que precisam de um lar."
    >
      <ul className={styles.list}>
        <li className={styles.card}>
          <h2>Animais</h2>
          <p>Veja os pets disponíveis para adoção.</p>
          <Link href="/animais">Ver animais</Link>
        </li>
        <li className={styles.card}>
          <h2>ONGs</h2>
          <p>Conheça as instituições parceiras.</p>
          <Link href="/ong">Ver ONGs</Link>
        </li>
        <li className={styles.card}>
          <h2>Adotantes</h2>
          <p>Lista de pessoas cadastradas no sistema.</p>
          <Link href="/adotante">Ver adotantes</Link>
        </li>
        <li className={styles.card}>
          <h2>Entrar</h2>
          <p>Faça login ou crie sua conta.</p>
          <Link href="/auth/login">Login</Link>
          {' · '}
          <Link href="/auth/cadastro">Cadastro</Link>
        </li>
      </ul>
    </PageShell>
  );
}
