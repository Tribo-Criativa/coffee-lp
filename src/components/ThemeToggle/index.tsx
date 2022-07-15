import { useContext } from 'react';
import { ThemeContext, ThemeVariants } from '../../context/ThemeContext';

import styles from './styles.module.css';

export function ThemeToggle() {
  const { themeVariant, setThemeVariant } = useContext(ThemeContext);

  return (
    <label className={styles.container}>
      <input
        className={styles.input}
        type="checkbox"
        onChange={() => setThemeVariant(themeVariant === ThemeVariants.DARK ? ThemeVariants.LIGHT : ThemeVariants.DARK)}
      />
      <span className={styles.slider} />
    </label>
  );
};
