"use client";

import {Button} from "@nextui-org/react";
import Profile from "@/components/profile";

interface SignInOutProps {
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

export default function SignInOut({ signIn, signOut } : SignInOutProps) {
    return (
        <div>
            <form action={signIn}>
                <Button type="submit">Sign in</Button>
            </form>
            <form action={signOut}>
                <Button type="submit">Sign out</Button>
            </form>
            <Profile />
        </div>
    );
}