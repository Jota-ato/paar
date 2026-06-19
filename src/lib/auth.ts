import 'dotenv/config';
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "@/db"
import { nextCookies } from "better-auth/next-js"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    socialProviders: {
        google: { 
        clientId: process.env.GOOGLE_CLIENT_ID as string, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        mapProfileToUser: (profile) => ({
            name: profile.name,
            email: profile.email,
            image: profile.picture,
        })
        }
    },
    user: {
        additionalFields: {
            coupleId: {
                type: "string",
                required: false
            },
            isLinked: {
                type: "boolean",
                defaultValue: false
            },
            description: {
                type: "string",
                required: false
            }
        },
        deleteUser: {
            enabled: true
        }
    },
    plugins: [nextCookies()]
})