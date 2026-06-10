import Link from 'next/link';
import PageShell from '@/app/components/PageShell';
import styles from '@/app/components/StatusMessage.module.css';
import { getAnimais } from '@/lib/api';

export default async function AnimaisPage() {
  let animais = [];
  let error: string | null = null;

  try {
    animais = await getAnimais();
  } catch (err) {
    error =
      err instanceof Error
        ? err.message
        : 'Erro ao conectar com a API. Verifique se o backend está rodando.';
  }

  return (
    <PageShell
      title="Animais"
      description="Animais cadastrados no sistema"
    >
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : animais.length === 0 ? (
        <p className={styles.empty}>Nenhum animal cadastrado ainda.</p>
      ) : (
        <ul className={styles.list}>
          {animais.map((animal) => (
            <li key={animal.id} className={styles.card}>
              <h2>
                <Link href={`/animais/${animal.id}`}>{animal.nome}</Link>
              </h2>
              <p>
                <strong>Status:</strong> {animal.status}
              </p>
              {animal.raca && (
                <p>
                  <strong>Raça:</strong> {animal.raca}
                </p>
              )}
              {animal.ong && (
                <p>
                  <strong>ONG:</strong> {animal.ong.nome} —{' '}
                  {animal.ong.localizacao}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
