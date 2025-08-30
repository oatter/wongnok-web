import NextAuth from 'next-auth'
import KeyclockProvider from 'next-auth/providers/keycloak'
import { decodeJwt } from 'jose'

const handler = NextAuth({
  providers: [
    KeyclockProvider({
      clientId: process.env.KEYCLOCK_CLIENT_ID ?? '',
      clientSecret: process.env.KEYCLOCK_CLIENT_SECRET ?? '',
      issuer: process.env.KEYCLOCK_ISSUER,
      authorization: { params: { prompt: 'login' } },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        console.log('account', account.access_token)
        const decode = decodeJwt(account.access_token as string)
        const realmRoles = decode?.realm_access?.roles ?? []
        token.email = decode.email as string
        token.roles = realmRoles
        token.accessToken = account.access_token
        token.userId = account.providerAccountId
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.userId = token.userId
      session.roles = token.roles
      session.email = token.email
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
