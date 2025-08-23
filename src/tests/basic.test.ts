import { addNumber } from '@/lib/basic'
import { describe, expect, it } from 'vitest'

describe('Verify add number function', () => {
  it('Should return 3 when 1 + 2', () => {
    // arrange
    const value1 = 1
    const value2 = 2

    // act
    const result = addNumber(value1, value2)
    // assert
    expect(result).toBe(3)
  })
})
