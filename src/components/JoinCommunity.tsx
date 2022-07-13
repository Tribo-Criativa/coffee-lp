import { ChatBubble } from "akar-icons";

export function JoinCommunity() {
    return (
        <a href='https://discord.gg/VZA4bNQQW6' title='Faça parte da nossa comunidade' className='flex gap-2 text-secondary-900 dark:text-white font-medium hover:text-orange transition-colors'>
            <ChatBubble />
        <span>Faça parte da nossa comunidade</span>
    </a>
    )
}