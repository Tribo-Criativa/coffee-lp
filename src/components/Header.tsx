import { ChatBubble } from 'akar-icons';
import { JoinCommunity } from './JoinCommunity';
import { Logo } from "./Logo";

export function Header() {
    return (
        <nav className='flex items-center justify-between w-full py-4'>
            <Logo />

            <JoinCommunity />
        </nav>
    )
}