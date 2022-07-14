
import { JoinCommunity } from '../JoinCommunity';
import { Logo } from '../Logo';

import styles from './styles.module.css';

export function Header() {
    return (
        <nav className={styles.container}>
            <Logo />
            <JoinCommunity />
        </nav>
    )
}