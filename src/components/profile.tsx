import { useSession } from "next-auth/react";

export default function Profile () {
    const session = useSession();

    if (session.data?.user) {
        return <div>User is signed in</div>
    } else {
        return <div>User is signed out</div>
    }
}