import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter
} from "react-icons/fa6"
const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
]

export default function FooterBrand() {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold tracking-tight">NEXORA</h2>
      {/*DESCRIPTION*/}
        <p className="mt-4 max-w-xs text-sm leading-6 text-background/60">
            Modern Solutions for a Brighter Future.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex items-center gap-4">
            {socialLinks.map(({icon: Icon, href, label})=> (
                <a
                key={label}
                href={href}
                aria-label={label}
                className="text-background/60 transition-colors duration-200 hover:text-primary">
                    <Icon size={18} strokeWidth={1.8}/>
                </a>
            ))}
        </div>
    </div>
  )
}
