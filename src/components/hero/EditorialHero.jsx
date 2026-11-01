import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button.tsx"
import { palettes, paletteToStyle } from "@/theme/palettes.js"

export default function EditorialHero({
  eyebrow = "Design for what's next",
  title = (
    <>
      Make your next move <em>matter.</em>
    </>
  ),
  description = "We bring clarity to complex ideas and turn them into digital experiences people WANT to use.",
  primaryCta = "Explore our work",
  primaryHref = "/projects",
  secondaryCta = "How we work",
  secondaryHref = "/services",
  palette = palettes.default,
}) {
  return (
    <section
      style={paletteToStyle(palette)}
      className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 bg-background px-5 py-20 text-foreground sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12"
      aria-labelledby="editorial-hero-title"
    >
      <div className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          {eyebrow}
        </p>

        <h1
          id="editorial-hero-title"
          className="mt-6 text-5xl leading-[1.02] font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            render={<Link to={primaryHref} />}
            size="lg"
            className="h-11 rounded-lg px-5"
          >
            {primaryCta}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
          <Button
            render={<Link to={secondaryHref}/>}
            variant="link"
            className="h-11 px-1 text-foreground">
                {secondaryCta}
            </Button>
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
            Independent thinking. Measurable impact.
        </p>
      </div>

      {/*abstract line art */}
      <div aria-hidden = "true" className="hidden min-h-80 lg:block"/>
    </section>
  )
}
