import { useId } from "react"
import { Star } from "lucide-react"
import { palettes, paletteToStyle } from "../../theme/palettes.js"

const defaultTestimonials = [
  {
    quote:
      "They made the complicated feel clear and helped us build something our customers love using.",
    name: "Jordan Miller",
    role: "Founder",
    company: "Common Ground",
    initials: "JM",
  },
  {
    quote:
      "A thoughtful team that brought clarity, energy, and real care to every detail.",
    name: "Alex Lee",
    role: "Product Lead",
    company: "Northline Finance",
    initials: "AL",
  },
  {
    quote:
      "The whole process felt collaborative. We ended up with an identity that feels unmistakably like us.",
    name: "Sam Kim",
    role: "Editor",
    company: "Field Notes",
    initials: "SK",
  },
]

function Author({ testimonial }) {
  const initials =
    testimonial.initials ??
    testimonial.name
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("")

  return (
    <div className="flex items-center gap-3">
      {testimonial.avatar ? (
        <img
          src={testimonial.avatar}
          alt=""
          className="size-11 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-muted text-sm font-semibold text-foreground"
        >
          {initials}
        </span>
      )}
      <span>
        <span className="block text-sm font-semibold">{testimonial.name}</span>
        <span className="mt-0.5 block text-xs text-muted-foreground">
          {[testimonial.role, testimonial.company].filter(Boolean).join(", ")}
        </span>
      </span>
    </div>
  )
}

function FeaturedQuote({ testimonial, rating }) {
  return (
    <article className="mx-auto mt-10 max-w-4xl rounded-3xl border border-border bg-card px-6 py-9 text-center text-card-foreground shadow-sm sm:px-12 sm:py-14">
      <div
        role="img"
        aria-label={`${rating} out of 5 stars`}
        className="mb-5 flex justify-center gap-1 text-primary"
      >
        {Array.from({ length: rating }, (_, index) => (
          <Star
            key={index}
            aria-hidden="true"
            className="size-4 fill-current"
          />
        ))}
      </div>
      <span
        aria-hidden="true"
        className="font-serif text-6xl leading-none text-primary"
      >
        “
      </span>
      <blockquote className="mx-auto mt-3 max-w-3xl text-xl leading-relaxed font-medium tracking-tight text-balance sm:text-2xl lg:text-3xl">
        {testimonial.quote}
      </blockquote>
      <footer className="mt-8 flex justify-center">
        <Author testimonial={testimonial} />
      </footer>
    </article>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="flex min-h-64 flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-7">
      <span
        aria-hidden="true"
        className="font-serif text-4xl leading-none text-primary"
      >
        “
      </span>
      <blockquote className="mt-4 flex-1 text-base leading-7">
        {testimonial.quote}
      </blockquote>
      <footer className="mt-7 border-t border-border pt-5">
        <Author testimonial={testimonial} />
      </footer>
    </article>
  )
}

export default function TestimonialsSection({
  eyebrow = "Kind words",
  title = "Good work is a team effort.",
  description = "A few words from the people we’ve worked alongside.",
  testimonials = defaultTestimonials,
  layout = "featured",
  featuredIndex = 0,
  featuredRating = 5,
  palette = palettes.default,
}) {
  const headingId = useId()
  const featuredTestimonial = testimonials[featuredIndex] ?? testimonials[0]
  const rating = Math.max(0, Math.min(5, Math.round(featuredRating)))

  return (
    <section
      style={paletteToStyle(palette)}
      className="bg-background px-5 py-20 text-foreground sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {description}
          </p>
        </header>

        {layout === "cards" ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.company ?? "client"}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        ) : (
          featuredTestimonial && (
            <FeaturedQuote testimonial={featuredTestimonial} rating={rating} />
          )
        )}
      </div>
    </section>
  )
}
