import Image from 'next/image'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <Image
        src='/wongnok-with-name-logo.png'
        width={182}
        height={49}
        alt='wongnok-logo'
      />
      <Button className='text-primary-a' variant='ghost'>
        <Image
          color='red'
          src='/icons/person.svg'
          alt='icon person'
          width={24}
          height={24}
        />
        เข้าระบบ
      </Button>
    </div>
  )
}

export default Navbar
