export default function FooterLinks({ title, links }) {
//  console.log({title, links})
    return (
    <div>
      <h3 className="text-sm font-semibold tracking-wider uppercase">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-background/60 transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
