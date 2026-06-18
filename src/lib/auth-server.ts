import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { User } from "@/features/user/types/user.types";


export async function getServerSession() {
    return await auth.api.getSession({
        headers: await headers()
    })
}

export async function requireAuth() { 
    const session = await getServerSession()

    return {
        session: {
            ...session,
            user: session?.user as User
        },
        isAuth: session ? true : false
    }
}