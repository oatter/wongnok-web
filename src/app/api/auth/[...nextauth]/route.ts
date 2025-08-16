import NextAuth from 'next-auth'
import KeyclockProvider from 'next-auth/providers/keycloak'

const handler = NextAuth({
  providers: [
    KeyclockProvider({
      clientId: process.env.KEYCLOCK_CLIENT_ID ?? '',
      clientSecret: process.env.KEYCLOCK_CLIENT_SECRET ?? '',
      issuer: process.env.KEYCLOCK_ISSUER,
      authorization: { params: { prompt: 'login' } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
