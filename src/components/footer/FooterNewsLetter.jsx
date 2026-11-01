import { Input } from "@/components/ui/input.tsx"
import { Button } from "@/components/ui/button.tsx"
import { ArrowRight } from "lucide-react"

export default function FooterNewsLetter() {
  return (
    <div>
      {/* Heading */}
      <h3 className="text0sm font-semibold tracking-wider uppercase">
        {" "}
        Stay Connected
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-6 text-background/60">
        Subscribe to our newsletter for company updates and announcements.
      </p>
      {/* Subscription Form */}
      <form className="mt-6 flex w-full items-center gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="min-w-0 border-background/20 bg-background/10 text-background placeholder:text-background/40 focus-visible:ring-primary"
        />
        <Button
          type="submit"
          size="icon"
          className="shrink-0"
          aria-label="Subscribe to newsletter"
        >
          <ArrowRight size={18} />
        </Button>
      </form>

      {/* Disclaimer */}
      <p className="mt-3 text-xs text-background/40">
        By subscribing, you agree to receive occasional updates from us.{" "}
      </p>
    </div>
  )
}
