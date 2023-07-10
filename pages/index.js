import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import FeaturedCard from '../components/FeaturedCard'
import Feed from '../components/Feed'
import { FiAnchor, FiArrowLeft, FiCheckCircle, FiGrid } from 'react-icons/fi'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Navbar />
      <FeaturedCard />
      <section className='absolute md:mt-[10%] mt-[10%]'>

       
        <Feed/>
      </section>
    </div>
  )
}
