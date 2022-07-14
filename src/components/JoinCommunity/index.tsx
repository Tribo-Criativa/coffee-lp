import { ChatBubble } from "akar-icons";

import styles from './styles.module.css';

export function JoinCommunity() {
    return (
        <a 
            href='https://discord.gg/VZA4bNQQW6' 
            title='Faça parte da nossa comunidade' 
            className={styles.container}
        >
            <ChatBubble />
        <span>Faça parte da nossa comunidade</span>
    </a>
    )
};