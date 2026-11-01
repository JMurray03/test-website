import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button.tsx"
import { ArrowRight } from "lucide-react"
import { palettes, paletteToStyle } from "@/theme/palettes.js"

export default function SimpleHero({
  eyebrow = "Building better experiences",
  title = "Modern solutions for a brighter future.",
  description = "We help ambitious companies build beautiful, high-performing web applications that make a real difference.",
  primaryCta = "Get Started",
  primaryHref = "/contact",
  palette = palettes.default,
}) {
    return(
        <section
          style={paletteToStyle(palette)}
          className="mx-auto max-w-7xl bg-background px-5 py-24 text-foreground sm:px-8 lg:px-12"
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 ">
            <Button
              render={<Link to={primaryHref} />}
              variant="default"
              className="rounded-lg px-6 py-3 font-bold"
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
    )
  }
