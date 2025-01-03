"use client";

import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input } from '@nextui-org/react';
import HeaderAuth from './header-auth';

export default function HeaderContent() {
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
                <HeaderAuth />
            </NavbarContent>
        </Navbar>
    )
}