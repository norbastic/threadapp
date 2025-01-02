"use client";

import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Button, Avatar, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { Session } from 'next-auth';
import React from 'react';
import * as actions from '@/actions';

interface HeaderContentProps {
    session: Session | null;
}

export default function HeaderContent({ session }: HeaderContentProps) {

    let authContent: React.ReactNode;
    if (session?.user) {
        authContent =
            <Popover placement='left'>
                <PopoverTrigger>
                    <Avatar src={session.user.image || ""} />
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


    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">
                    Thread App
                </Link>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem>
                    <Input></Input>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify='end'>
                {authContent}
            </NavbarContent>
        </Navbar>
    )
}