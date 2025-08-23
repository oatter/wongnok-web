import { api } from '@/lib/axios'
import { fetchRecipeDetails, RecipeDetails } from '@/services/recipe.service'
import { describe, expect, it, Mock, vi } from 'vitest'

vi.mock('@/lib/axios')

// Arrange
const mockCookingDuration = {
  id: 1,
  name: '60+ minutes',
}

const mockRecipeDetails: RecipeDetails = {
  id: 1,
  name: 'Pose Egg',
  description: 'Description of pose egg',
  ingredient: 'water eggs',
  instruction: 'this is a instruction',
  imageUrl: 'https://assets.wongnok.com/image1.png',
  cookingDuration: mockCookingDuration,
  difficulty: {
    id: 1,
    name: 'EASY',
  },
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
  averageRating: 4,
  user: {
    id: 'user-id-1',
    firstName: 'Joey',
    lastName: 'Wasin',
  },
}

describe('Verify get recipe details from API', () => {
  it('Should return recipe details when call fetching API', async () => {
    // arrange
    ;(api.get as unknown as Mock).mockResolvedValueOnce({
      data: { results: mockRecipeDetails },
    })

    // act
    const result = await fetchRecipeDetails()

    // assert
    expect(api.get).toHaveBeenCalledWith('/recipe-details')
    expect(result).toEqual({ data: { results: mockRecipeDetails } })
  })
})
