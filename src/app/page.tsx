import { FeaturedSect } from '@/components/home/featuredSect'
import { TrendingSect } from '@/components/home/trendingSect'
import Image from 'next/image'
import { register } from 'swiper/element/bundle'
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
