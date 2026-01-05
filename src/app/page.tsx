import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import HomeHero from '@/components/HomeHero'
import About from '@/components/About'
import FeaturedPhotos from '@/components/FeaturedPhotos'
import FeaturedProjects from '@/components/FeaturedProjects'
import LatestPosts from '@/components/LatestPosts'
import CTA from '@/components/CTA'

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="w-full">
        <HomeHero/>
        <About />
        <FeaturedProjects />
        <FeaturedPhotos />
        <LatestPosts />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
