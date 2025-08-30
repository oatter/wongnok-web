'use client'

import CardRecipe from '@/components/CardRecipe'
import SkeletonCardLoading from '@/components/SkeletonCardLoading'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { fetchRecipes, Recipe } from '@/services/recipe.service'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

type User = {
  id: string
  firstName: string
  lastName: string
}

export type CardRecipeProps = {
  id: string
  name: string
  imageUrl: string
  description: string
  cookingDuration: {
    id: number
    name: string
  }
  difficulty: {
    id: number
    name: string
  }
  user: User
  isAdmin?: boolean
  isMyEmail?: boolean
}

export default function Home() {
  const [recipesData, setRecipesData] = useState<{
    results: Recipe[]
    total: number
  }>({
    results: [],
    total: 0,
  })
  const {
    mutateAsync: getRecipe,
    isPending: isRecipeLoading,
    isError: isRecipeError,
  } = useMutation({
    mutationFn: fetchRecipes,
    onError: () => {
      console.log('error fetching')
    },
    onSuccess: (data) => {
      setRecipesData(data)
    },
  })
  const limitDataPerPage = 5
  const pathname = usePathname()
  
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  params.set('limit', String(limitDataPerPage))

  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get('page') ?? 1)
  )
  const [searchInput, setSearchInput] = useState<string>(
    searchParams.get('search') ?? ''
  )

  useEffect(() => {
    params.set('page', String(currentPage))
    router.replace(`${pathname}?${params.toString()}`)
    getRecipe({
      page: Number(currentPage),
      limit: limitDataPerPage,
      search: searchInput,
    })
  }, [currentPage])

  const handleSearch = useDebouncedCallback((data) => {
    params.set('page', '1')
    if (searchInput === '') {
      params.delete('search')
    } else {
      params.set('search', searchInput)
    }
    router.replace(`${pathname}?${params.toString()}`)
    getRecipe({
      page: Number(currentPage),
      limit: limitDataPerPage,
      search: data,
    })
  }, 1000)

  if (isRecipeError) return <h1>Error</h1>

  return (
    <div>
      <Input
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value)
          handleSearch(e.target.value)
        }}
      />
      <h1 className='pt-6 pb-8 text-4xl font-bold'>สูตรอาหารทั้งหมด</h1>
      {isRecipeLoading ? (
        <div>
          <h1 className='pt-6 pb-8 text-4xl font-bold'>สูตรอาหารทั้งหมด</h1>
          <div className='flex flex-wrap gap-8'>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => {
              return <SkeletonCardLoading key={i} />
            })}
          </div>
        </div>
      ) : (
        <div className='flex flex-wrap gap-8'>
          {recipesData &&
            recipesData.results.length > 0 &&
            recipesData.results.map((recipe) => {
              return (
                <Link key={recipe.id} href={`recipe-details/${recipe.id}`}>
                  <CardRecipe key={recipe.id} {...recipe} />
                </Link>
              )
            })}
        </div>
      )}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                setCurrentPage((prev) => {
                  return prev <= 1 ? prev : prev - 1
                })
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{currentPage}</PaginationLink>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                setCurrentPage((prev) => {
                  return prev >= Math.ceil(recipesData.total / limitDataPerPage)
                    ? prev
                    : prev + 1
                })
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
