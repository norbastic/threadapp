import * as actions from "@/actions";
import { auth } from "@/auth";
import SignInOut from "@/components/sign-in-out";

export default async function Home() {
    const session = await auth();

      return (
          <SignInOut
              session={session}
              signIn={actions.signIn}
              signOut={actions.signOut} />
      );
}
