import { Arrow } from "../Arrow";

import styles from './styles.module.css';

export function Annotation() {
    return (
        <div className={styles.container}>
            <Arrow />
            <span className={styles.lable}>Rápido e grátis! (menos de 5 minutos)</span>
        </div>
    )
}