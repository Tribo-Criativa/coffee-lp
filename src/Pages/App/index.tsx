import { useState } from "react";
import { Annotation } from "../../components/Annotation";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ThemeToggle } from "../../components/ThemeToggle";

import styles from './styles.module.css';

function App() {
  const [ darkMode, setDarkMode ] = useState(false);

  return (
    <main className={styles.container}>
      <Header />

      <div className={styles.textWrapper}>
        <span className={styles.hat}>☕ PESQUISA QUANTITATIVA</span>

        <h1 className={styles.heroLead}>
            <span className="underline decoration-8 decoration-orange">Café</span> 
            {' '}
            nosso de cada dia
        </h1>

        <span className={styles.heroParagraph}>
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
        </span>
      </div>

      <div className={styles.ctaContainer}>
        <Button 
          label="Responder agora" 
          title="Responder formulário agora!" 
          to="https://forms.gle/PMxoUoS9dBVuT4ULA" 
        />
        <Annotation />

        <ThemeToggle onChange={(event: any) => setDarkMode(event.target.checked)} />
      </div>
    </main>
  )
}

export default App
