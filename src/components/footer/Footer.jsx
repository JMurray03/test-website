import FooterLinks from "./FooterLinks"
import FooterBrand from "./FooterBrand"
import FooterNewsLetter from "./FooterNewsLetter"
import FooterBottom from "./FooterBottom"
import { Separator } from "@/components/ui/separator"
import { palettes, paletteToStyle } from "../../theme/palettes"

export default function Footer({palette = palettes.default}) {
  return (
    <footer style={paletteToStyle(palette)} className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
         <FooterBrand/> 
          {/* Quick Links */}
          <FooterLinks
            title="Quick Links"
            links={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Projects", href: "/projects" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          {/* Services */}
          <FooterLinks
            title="Services"
            links={[
              { label: "QuickLink1", href: "/" },
              { label: "QuickLink2", href: "/about" },
              { label: "QuickLink3", href: "/projects" },
            ]}
          />
          {/* Company */}
          <FooterLinks
            title="Company"
            links={[
              { label: "Our Team", href: "/" },
              { label: "Careers", href: "/about" },
              { label: "News", href: "/projects" },
            ]}
          />
          {/* Newsletter */}
          <FooterNewsLetter/>
        </div>
        {/* Footer Bottom */}
        <Separator className="my-12 bg-background/20" />
        <FooterBottom/>
       
      </div>
    </footer>
  )
}
