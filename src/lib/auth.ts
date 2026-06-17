
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "@/db"
import { nextCookies } from "better-auth/next-js"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    user: {
        additionalFields: {
            coupleId: {
                type: "string",
                required: false
            }
        }
    },
    plugins: [nextCookies()]
})