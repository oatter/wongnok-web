import withAuth from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized({ token }) {
      const roles: string[] = token?.roles ?? []
      const isAdminRecipe = roles.includes('admin-recipe')
      return isAdminRecipe
    },
  },
})

export const config = {
  matcher: ['/'],
}
