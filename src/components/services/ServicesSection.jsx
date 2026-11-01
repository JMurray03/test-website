import { 
    ArrowRight,
    Code2,
    Compass,
    PenTool,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { palettes, paletteToStyle } from "../../theme/palettes";

const defaultServices = [
    {
    title: "Strategy",
    description: "Find the signal, define the opportunity, and set a clear direction.",
    icon: Compass,
    href: "/services/strategy",
  },
  {
    title: "Design",
    description: "Make useful digital experiences feel clear, distinctive, and effortless.",
    icon: PenTool,
    href: "/services/design",
  },
  {
    title: "Development",
    description: "Build responsive, accessible products that are ready to grow.",
    icon: Code2,
    href: "/services/development",
  },
]

function ServiceCard({service}){
    const Icon = service.icon ?? Sparkles

    return (
        <article className="flex min-h-52 flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground">
      <div className="mb-8 flex size-11 items-center justify-center rounded-xl bg-muted text-foreground">
        <Icon aria-hidden="true" className="size-5" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {service.description}
      </p>

      {service.href && (
        <Link
          to={service.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
        >
          Learn more
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      )}
    </article>
    )
}

export default function ServicesSection({
    eyebrow="What we do",
    title="One team, end to end.",
    description="A focused partner from the first question through launch and beyond.",
    services = defaultServices,
    layout = "bento",
    featuredIndex = 0,
    palette = palettes.default,
}) {
    const featuredService = services[featuredIndex] ?? services[0]
    const supportingServices = services.filter(
        (_, index) => index !== featuredIndex,
    )

    return (
        <section
        style={paletteToStyle(palette)}
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="services-title">
            <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {eyebrow}
        </p>

        <h2
          id="services-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {title}
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {description}
        </p>
            </div>

            {layout === "cards" ? (
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service}/>
                    ))}
                </div>
                ): (
                    <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                        {featuredService && (
                            <article className="flex min-h-[26rem] flex-col justify-between rounded-2xl bg-primary p-7 text-primary-foreground sm:p-9">
                                <div className="flex size-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                                    {(() => {
                                        const Icon = featuredService.icon ?? Sparkles
                                        return <Icon aria-hidden="true" className="size-6"/>
                                    })()}
                                </div>

                                <div className="mt-12">
                                    <p className="text-xs font-medium tracking-[0.14em] text-primary-foreground/70 uppercase">
                                        Feaured service </p>
                                        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                            {featuredService.title}
                                        </h3>

                                        <p className="mt-4 max-w-lg text-sm leading-6 text-primary-foreground/75 sm:text-base">
                                            {featuredService.description}
                                        </p>
                                        {featuredService.href && (
                                            <Link to={featuredService.href}
                                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
                                            >
                                                Learn More
                                                <ArrowRight aria-hidden="true" className="size-4"/>
                                            </Link>
                                        )}
                                </div>
                            </article>
                        )}

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            {supportingServices.map((service => (
                                <ServiceCard key={service.title} service={service}/>
                            )))}
                        </div>
                    </div>
                )}
        </section>
    )
}
