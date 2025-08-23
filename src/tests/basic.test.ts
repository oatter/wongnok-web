import { api } from '@/lib/axios'
import { fetchRecipesByUser } from '@/services/recipe.service'
import { describe, expect, it, Mock, vi } from 'vitest'

const addNumber = (a: number, b: number) => a + b

describe('Validate Basic Functional', () => {
  it('Should return 3 when 1 + 2', () => {
    expect(addNumber(1, 2)).toBe(3)
  })
})

vi.mock('../lib/axios')

const mockRecipes = {
  id: '1',
  name: 'test',
  imageUrl: 'https://foodish-api.com/images/rice/rice13.jpg',
  description: 'test',
  cookingDuration: {
    id: 1,
    name: '60+ Minutes',
  },
  difficulty: {
    id: 1,
    name: 'ยาก',
  },
  user: {
    id: 1,
    firstName: 'Joey',
    lastName: 'Wasin',
  },
}

describe('Validate get recipes', () => {
  it('Should return all recipes by user id', async () => {
    ;(api.get as unknown as Mock).mockResolvedValueOnce({
      data: {
        results: {
          ...mockRecipes,
        },
      },
    })

    const userId = '123'
    const token = 'test-token'
    const result = await fetchRecipesByUser(userId, token)

    expect(api.get).toHaveBeenCalledWith(
      `/api/v1/users/${userId}/food-recipes`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    expect(result).toEqual(mockRecipes)
  })
})
