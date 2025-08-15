import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

type User = {
  id: string
  firstName: string
  lastName: string
}

type CardRecipeProps = {
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
}

const CardRecipe = ({
  name,
  imageUrl,
  description,
  difficulty,
  cookingDuration,
  user,
}: CardRecipeProps) => (
  <Card className='w-[276px] h-[390px]'>
    <div>
      <div className='h-[158px] relative rounded-t-lg pb-4'>
        <Image src={imageUrl} alt={`${name} image`} fill objectFit='cover' />
      </div>
      <div>
        <CardContent>
          <h1 className='font-bold'>{name}</h1>
          <p className='text-secondary line-clamp-3'>{description}</p>
        </CardContent>
      </div>
    </div>

    <div>
      <CardFooter>
        <div className='flex w-full item-center'>
          <div className='flex p-1 grow'>
            <img src='/icons/av_timer.svg' alt='av timer' />
            <p>{difficulty.name}</p>
          </div>
          <div className='flex p-1 grow'>
            <img src='/icons/level.svg' alt='level' />
            <p>{cookingDuration.name}</p>
          </div>
        </div>
        <div>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>{user.firstName}</AvatarFallback>
          </Avatar>
        </div>
      </CardFooter>
    </div>
  </Card>
)

export default function Home() {
  const mockRecipes = [
    {
      id: 5,
      name: 'Chicken Fried Rice',
      description: 'Quick and tasty fried rice with chicken and veggies.',
      ingredient: 'Cooked Rice, Chicken, Eggs, Carrots, Peas, Soy Sauce',
      instruction:
        'Stir-fry chicken and vegetables. Add rice and scrambled eggs. Season with soy sauce.',
      imageUrl: 'https://foodish-api.com/images/rice/rice13.jpg',
      cookingDuration: {
        id: 1,
        name: '5 - 10',
      },
      difficulty: {
        id: 1,
        name: 'Easy',
      },
      createdAt: '2025-07-31T16:24:09.613689Z',
      updatedAt: '2025-07-31T16:24:09.613689Z',
      averageRating: 0,
      user: {
        id: 'ba9872c8-49fa-42d8-8664-d9a44babe021',
        firstName: 'oat',
        lastName: 'ter',
      },
    },
    {
      id: 4,
      name: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta dish with creamy sauce.',
      ingredient: 'Spaghetti, Eggs, Parmesan, Pancetta, Black Pepper, Salt',
      instruction:
        'Cook spaghetti. Fry pancetta. Mix eggs with cheese. Combine all ingredients.',
      imageUrl: 'https://foodish-api.com/images/pasta/pasta17.jpg',
      cookingDuration: {
        id: 2,
        name: '11 - 30',
      },
      difficulty: {
        id: 1,
        name: 'Easy',
      },
      createdAt: '2025-07-31T16:23:42.02594Z',
      updatedAt: '2025-07-31T16:23:42.02594Z',
      averageRating: 0,
      user: {
        id: 'ba9872c8-49fa-42d8-8664-d9a44babe021',
        firstName: 'oat',
        lastName: 'ter',
      },
    },
    {
      id: 9,
      name: 'กล้วยชุบแป้งทอด',
      description:
        'กล้วยชุบแป้งทอดเนื้อฟูนอกกรอบใน หอมกลิ่นกล้วยสุกและแป้งทอด รสหวานธรรมชาติของกล้วยตัดกับความเค็มเล็กน้อยของแป้ง เหมาะเป็นของว่างยามบ่าย',
      ingredient: 'แป้ง, น้ำตาล, ไข่, กล้วย, น้ำมัน',
      instruction: 'ทอดกล้วยชุบแป้ง จนเหลืองกรอบ',
      imageUrl: 'https://foodish-api.com/images/dessert/dessert17.jpg',
      cookingDuration: {
        id: 1,
        name: '5 - 10',
      },
      difficulty: {
        id: 1,
        name: 'Easy',
      },
      createdAt: '2025-08-13T15:27:41.239544Z',
      updatedAt: '2025-08-13T15:27:41.239544Z',
      averageRating: 0,
      user: {
        id: 'ba9872c8-49fa-42d8-8664-d9a44babe021',
        firstName: 'oat',
        lastName: 'ter',
      },
    },
    {
      id: 10,
      name: 'ข้าวผัดแกงกะหรี่ปลา',
      description:
        'ข้าวผัดแกงกะหรี่ปลา รสเข้มข้นจากผงกะหรี่และกะทิ หอมเครื่องเทศ กลมกล่อมด้วยเนื้อปลาชิ้นโตและผักหลากสี เพิ่มความน่าสนใจด้วยกลิ่นหอมของผักชีลาว',
      ingredient: 'ข้าวหอมมะลิ, ผงกะหรี่, ปลา, ผัก, กะทิ',
      instruction: 'ผัดทุกอย่างรวมกันบนกระทะจนหอม',
      imageUrl: 'https://foodish-api.com/images/rice/rice35.jpg',
      cookingDuration: {
        id: 2,
        name: '11 - 30',
      },
      difficulty: {
        id: 2,
        name: 'Medium',
      },
      createdAt: '2025-08-13T15:27:48.875565Z',
      updatedAt: '2025-08-13T15:27:48.875565Z',
      averageRating: 0,
      user: {
        id: 'ba9872c8-49fa-42d8-8664-d9a44babe021',
        firstName: 'oat',
        lastName: 'ter',
      },
    },
    {
      id: 15,
      name: 'ข้าวมันไก่',
      description:
        'ข้าวมันไก่เนื้อนุ่ม หุงข้าวด้วยน้ำซุปไก่และมันไก่จนหอม เสิร์ฟพร้อมไก่ต้มสุกกำลังดี น้ำจิ้มเต้าเจี้ยวรสจัด และน้ำซุปใส',
      ingredient: 'ข้าวหอมมะลิ, ไก่, เต้าเจี้ยว, ขิง, กระเทียม',
      instruction: 'ต้มไก่ หุงข้าวกับน้ำซุป เสิร์ฟพร้อมน้ำจิ้มและซุป',
      imageUrl: 'https://foodish-api.com/images/rice/rice6.jpg',
      cookingDuration: {
        id: 3,
        name: '31 - 60',
      },
      difficulty: {
        id: 2,
        name: 'Medium',
      },
      createdAt: '2025-08-13T15:29:06.258471Z',
      updatedAt: '2025-08-13T15:29:06.258471Z',
      averageRating: 0,
      user: {
        id: 'ba9872c8-49fa-42d8-8664-d9a44babe021',
        firstName: 'oat',
        lastName: 'ter',
      },
    },
  ]
  return (
    <div>
      <h1 className='pt-6 pb-8 text-4xl font-bold'>สูตรอาหารทั้งหมด</h1>
      <div className='flex flex-wrap gap-8'>
        {mockRecipes.map((recipe) => {
          return (
            <Link key={recipe.id} href={`recipe-details/${recipe.id}`}>
              <CardRecipe key={recipe.id} {...recipe} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
