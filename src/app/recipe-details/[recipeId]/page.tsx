type RecipeDetailsIdProps = {
  params: Promise<{
    recipeId: string
  }>
}

const RecipeDetailsId = async ({ params }: RecipeDetailsIdProps) => {
  const { recipeId } = await params
  return <div>Recipe details Dynamic routing {recipeId}</div>
}

export default RecipeDetailsId
