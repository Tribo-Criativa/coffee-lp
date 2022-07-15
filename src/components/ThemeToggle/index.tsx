import styles from './styles.module.css';

interface ThemeToggleProps {
  onChange: any;
};

export function ThemeToggle({ onChange }: ThemeToggleProps) {
  return (
    <label className={styles.container}>
      <input
        className={styles.input}
        type="checkbox"
        onChange={onChange}
      />
      <span className={styles.slider} />
    </label>
  );
};
