'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import PageShell from '@/app/components/PageShell';
import { login } from '@/lib/api';
import styles from '../auth.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const result = await login({ email, senha });
      localStorage.setItem('access_token', result.access_token);
      setSuccess('Login realizado com sucesso.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao fazer login.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell title="Login" description="Entre com sua conta">
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>

      {success && <p className={styles.success}>{success}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <p className={styles.footer}>
        Não tem conta? <Link href="/auth/cadastro">Cadastre-se</Link>
      </p>
    </PageShell>
  );
}
