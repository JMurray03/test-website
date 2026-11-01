import Header from "./components/Header"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import SimpleHero from "./components/hero/SimpleHero"
import EditorialHero from "./components/hero/EditorialHero"
import ServicesSection from "./components/services/ServicesSection"
import FeaturedProjectsSection from "./components/projects/FeaturedProjectsSection"
import TestimonialsSection from "./components/testimonials/TestimonialSection"
import { palettes } from "./theme/palettes"

const sitePalette = palettes.default

export default function App() {
  return (
    <>
      <Header palette={sitePalette} />
      <main>
        {/* Swap hero components here; each uses the same palette. */}
        <Hero palette={sitePalette} />
        {/* <EditorialHero palette={sitePalette} /> */}
        {/* <SimpleHero palette={sitePalette} /> */}

        <ServicesSection layout="bento" palette={sitePalette} />
        <ServicesSection layout="cards" palette={sitePalette} />
        <FeaturedProjectsSection layout="spotlight" palette={sitePalette} />
        <FeaturedProjectsSection layout="editorial" palette={sitePalette} />
        <TestimonialsSection layout="featured" palette={sitePalette}/>
        <TestimonialsSection layout="cards" palette={sitePalette}/>
      
      </main>
      <Footer palette={sitePalette} />
    </>
  )
}
