import PageShell from '@/app/components/PageShell';
import styles from '@/app/components/StatusMessage.module.css';
import { getAdotantes } from '@/lib/api';

export default async function AdotantePage() {
  let adotantes = [];
  let error: string | null = null;

  try {
    adotantes = await getAdotantes();
  } catch (err) {
    error =
      err instanceof Error
        ? err.message
        : 'Erro ao conectar com a API. Verifique se o backend está rodando.';
  }

  return (
    <PageShell
      title="Adotantes"
      description="Pessoas cadastradas para adoção"
    >
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : adotantes.length === 0 ? (
        <p className={styles.empty}>Nenhum adotante cadastrado ainda.</p>
      ) : (
        <ul className={styles.list}>
          {adotantes.map((adotante) => (
            <li key={adotante.id} className={styles.card}>
              <h2>{adotante.nome}</h2>
              <p>
                <strong>Localização:</strong> {adotante.localizacao}
              </p>
              {adotante.email && (
                <p>
                  <strong>Email:</strong> {adotante.email}
                </p>
              )}
              {adotante.telefones && adotante.telefones.length > 0 && (
                <p>
                  <strong>Telefone:</strong>{' '}
                  {adotante.telefones.map((t) => t.numero).join(', ')}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
