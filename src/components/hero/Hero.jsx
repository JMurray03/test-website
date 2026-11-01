import { ArrowDown, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button.tsx"
import { palettes, paletteToStyle } from "@/theme/palettes.js"
import "./hero.css"

export default function Hero({
  eyebrow = "Thoughtful Design Experiences",
  title = "Turn Bold ideas into a lasting impact.",
  description = "We help ambitious teams shape clear, useful digital products that move their business forward.",
  primaryCta = "Explore our work",
  primaryHref = "/projects",
  secondaryCta = "Meet the team",
  secondaryHref = "/about",
  backgroundImage,
  palette = palettes.default,
}) {
  const backdropStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(180deg, color-mix(in oklab, var(--hero-background) 8%, transparent), color-mix(in oklab, var(--hero-background) 58%, transparent)), url("${backgroundImage}")`,
      }
    : undefined

  return (
    <section
      style={{
        ...paletteToStyle(palette),
        "--hero-background": palette.headerBackground ?? palette.foreground,
        "--hero-foreground": palette.headerForeground ?? palette.background,
        backgroundColor: palette.headerBackground ?? palette.foreground,
        color: palette.headerForeground ?? palette.background,
      }}
      className="hero-scenic relative isolate flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-5 py-24 text-center text-[color:var(--hero-foreground)] sm:px-8 lg:px-12"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className={`hero-scenic__backdrop absolute inset-0 -z-10 ${
          backgroundImage ? "hero-scenic__backdrop--image" : ""
        }`}
        style={backdropStyle}
      />
      <div aria-hidden="true" className="hero-scenic__sun absolute -z-10" />
      <div
        aria-hidden="true"
        className="hero-scenic__ridge hero-scenic__ridge--far absolute -z-10"
      />
      <div
        aria-hidden="true"
        className="hero-scenic__ridge hero-scenic__ridge--near absolute -z-10"
      />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hero-foreground)]/25 bg-[color:var(--hero-background)]/55 px-4 py-2 text-xs font-medium tracking-wide text-[color:var(--hero-foreground)] backdrop-blur-sm sm:text-sm">
          <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
          {eyebrow}
        </span>

        <h1
          id="hero-title"
          className="mt-7 max-w-3xl text-5xl leading-[1.02] font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-[color:var(--hero-foreground)]/80 sm:text-lg sm:leading-8">
          {description}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button
            render={<Link to={primaryHref} />}
            size="lg"
            className="h-11 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {primaryCta}
            <ArrowRight aria-hidden="true" className="ml-1 size-4" />
          </Button>

          <Button
            render={<Link to={secondaryHref} />}
            variant="outline"
            size="lg"
            className="h-11 rounded-lg border-[color:var(--hero-foreground)]/35 bg-[color:var(--hero-foreground)]/10 px-5 text-sm font-semibold text-[color:var(--hero-foreground)] hover:bg-[color:var(--hero-foreground)]/20 hover:text-[color:var(--hero-foreground)]"
          >
            {secondaryCta}
          </Button>
        </div>
        <a
          href="#main-content"
          className="mt-14 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[color:var(--hero-foreground)]/70 transition-colors hover:text-[color:var(--hero-foreground)]"
        >
          Discover more
          <ArrowDown aria-hidden="true" className="size-3.5" />
        </a>
      </div>
    </section>
  )
}
