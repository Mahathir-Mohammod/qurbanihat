import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({

    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000"
})

export const { signIn, signUp, useSession } = authClient

// Export manage API for user profile updates
export const { manage } = authClient