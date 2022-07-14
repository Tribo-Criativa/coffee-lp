import styles from './styles.module.css';

interface ButtonProps {
    label: string,
    to: string,
    title: string
};

export function Button({ label, to, title }: ButtonProps) {
    return (
        <a className={styles.container} href={to} title={title}>
            {label}
        </a>
    )
};