import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/app/components/PageShell';
import styles from '@/app/components/StatusMessage.module.css';
import { getAnimal } from '@/lib/api';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AnimalDetailPage({ params }: Props) {
  const { id } = await params;
  const animalId = Number(id);

  if (Number.isNaN(animalId)) {
    notFound();
  }

  try {
    const animal = await getAnimal(animalId);

    return (
      <PageShell title={animal.nome} description="Detalhes do animal">
        <div className={styles.card}>
          <p>
            <strong>Status:</strong> {animal.status}
          </p>
          {animal.sexo && (
            <p>
              <strong>Sexo:</strong> {animal.sexo}
            </p>
          )}
          {animal.raca && (
            <p>
              <strong>Raça:</strong> {animal.raca}
            </p>
          )}
          {animal.idade != null && (
            <p>
              <strong>Idade:</strong> {animal.idade} ano(s)
            </p>
          )}
          {animal.cor && (
            <p>
              <strong>Cor:</strong> {animal.cor}
            </p>
          )}
          {animal.porte && (
            <p>
              <strong>Porte:</strong> {animal.porte}
            </p>
          )}
          {animal.temperamento && (
            <p>
              <strong>Temperamento:</strong> {animal.temperamento}
            </p>
          )}
          {animal.ong && (
            <p>
              <strong>ONG:</strong> {animal.ong.nome} — {animal.ong.localizacao}
            </p>
          )}
        </div>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/animais">← Voltar para lista</Link>
        </p>
      </PageShell>
    );
  } catch {
    notFound();
  }
}
