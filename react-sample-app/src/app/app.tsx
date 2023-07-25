import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.contentHeader}>Hi there!</h1>
      <p className={`${styles['weatherStatus']} ${styles.highlight}`}>
        Today is sunny
      </p>
    </div>
  );
}

export default App;
