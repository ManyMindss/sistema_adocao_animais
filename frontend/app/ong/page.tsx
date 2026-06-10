import PageShell from '@/app/components/PageShell';
import styles from '@/app/components/StatusMessage.module.css';
import { getOngs } from '@/lib/api';

export default async function OngPage() {
  let ongs = [];
  let error: string | null = null;

  try {
    ongs = await getOngs();
  } catch (err) {
    error =
      err instanceof Error
        ? err.message
        : 'Erro ao conectar com a API. Verifique se o backend está rodando.';
  }

  return (
    <PageShell title="ONGs" description="Instituições cadastradas no sistema">
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : ongs.length === 0 ? (
        <p className={styles.empty}>Nenhuma ONG cadastrada ainda.</p>
      ) : (
        <ul className={styles.list}>
          {ongs.map((ong) => (
            <li key={ong.id} className={styles.card}>
              <h2>{ong.nome}</h2>
              <p>
                <strong>Localização:</strong> {ong.localizacao}
              </p>
              {ong.email && (
                <p>
                  <strong>Email:</strong> {ong.email}
                </p>
              )}
              {ong.telefones && ong.telefones.length > 0 && (
                <p>
                  <strong>Telefone:</strong>{' '}
                  {ong.telefones.map((t) => t.numero).join(', ')}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
