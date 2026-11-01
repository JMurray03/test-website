import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Search, Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
import {Button} from "./ui/button.tsx"
import { palettes, paletteToStyle } from "../theme/palettes.js"

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

export default function Header({palette = palettes.default}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header
      style={{
        ...paletteToStyle(palette),
        backgroundColor: palette.headerBackground,
        color: palette.headerForeground,
        "--muted-foreground": palette.headerMutedForeground,
      }}
      className="sticky top-0 z-50 w-full border-b border-border/20 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Nexora home"
        >
          <div className="flex h-9 w-9 items-center justify-center bg-foreground text-background">
            <span className="text-lg font-black">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Nexora</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Expandable Search */}
          <div
            className={`flex h-10 items-center rounded-lg border transition-all duration-300 ease-in-out ${
              searchOpen
                ? "w-56 border-input bg-background px-3"
                : "w-10 border-transparent"
            }`}
            onMouseEnter={() => setSearchOpen(true)}
            onMouseLeave={() => setSearchOpen(false)}
          >
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />

            <input
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className={`min-w-0 bg-transparent text-sm transition-all duration-300 outline-none ${
                searchOpen ? "ml-2 w-full opacity-100" : "w-0 opacity-0"
              }`}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
            />
          </div>

          {/* CTA */}
          <Button  variant="default" className="rounded-lg px-6 py-3 font-bold">
            <Link to="/contact" className="inline-flex items-center gap-2">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aira-label={mobileOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-5 pt-4 pb-6 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Get Started
                <ArrowRight className="m1-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
