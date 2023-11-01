import TodayPrayer from '@/components/TodayPrayer'
import Blog from '@/components/blog'
import Card from '@/components/card'
import Hero from '@/components/hero'
import Teams from '@/components/teams'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <TodayPrayer/>
      <Card/>
      <Blog/>
      <Teams/>
    </main>
  )
}
