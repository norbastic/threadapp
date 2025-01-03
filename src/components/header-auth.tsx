"use client";

import { NavbarItem, Button, Avatar, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

export default function HeaderAuth() {
    const session = useSession();

    console.log(`session: ${JSON.stringify(session)}`);

    let authContent: React.ReactNode;

    if (session.status === 'loading') {
        authContent = <div>Loading...</div>;
    } else if (session.data?.user) {
        authContent =
            <Popover placement='left'>
                <PopoverTrigger>
                    <Avatar src={session.data?.user.image || ""} />
                </PopoverTrigger>
                <PopoverContent>
                    <div className='p-4'>
                        <form action={actions.signOut}>
                            <Button type='submit'>Sign out</Button>
                        </form>
                    </div>
                </PopoverContent>       
            </Popover>        
    } else {
        authContent = <>
            <NavbarItem>
                <form action={actions.signIn}>
                    <Button type='submit' color='secondary' variant='bordered'>Sign in</Button>
                </form>                
            </NavbarItem>
            <NavbarItem>
                <form action={actions.signIn}>
                    <Button type='submit' color='primary' variant='flat'>Sign up</Button>
                </form>                
            </NavbarItem> 
        </>
    }

    return authContent;
}