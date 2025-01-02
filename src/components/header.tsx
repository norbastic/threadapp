import { auth } from '@/auth';
import HeaderContent from './header-content';

export default async function Header() {
    const session = await auth();

    return (
        <HeaderContent session={session} />
    )

}