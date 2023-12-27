import { FeaturedSect } from '@/components/home/featuredSect'
import { TrendingSect } from '@/components/home/trendingSect'
import Image from 'next/image'
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
register()

export default function Home() {
  return (
    <>
      <main>
          <FeaturedSect/>
          <TrendingSect/>
      </main>
    </>
  )
}
