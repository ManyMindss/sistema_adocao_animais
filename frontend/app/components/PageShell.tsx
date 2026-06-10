import styles from './PageShell.module.css';

type PageShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function PageShell({
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </header>
        {children}
      </main>
    </div>
  );
}
