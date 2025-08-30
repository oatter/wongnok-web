import NextAuth from "next-auth";

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string
        userId?: string
        roles?: string[]
    }
}

declare module 'next-auth' {
    interface Session {
        accessToken?: string
        userId?: string
        roles?: string[]
        email?: string | null | undefined
    }
}