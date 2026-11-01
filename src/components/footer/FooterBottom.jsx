

export default function FooterBottom (){
    return (
         <div className="flex flex-col gap-4 text-sm text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NEXORA INC. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms & Conditions
            </a>
          </div>
        </div>
    )
}