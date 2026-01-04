import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/stevedya/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/steven-steinwand/", label: "LinkedIn" },
    {icon: Instagram, href: "https://instagram.com/steven_ts", label: "Instagram"}
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-wide py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link href="/" className="font-spectral text-xl font-medium">
              Steven Steinwand
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Software developer & photographer based in Canada.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <NavLink href="/work">
                Work
              </NavLink>
              <NavLink href="/gallery">
                Gallery
              </NavLink>
              <NavLink href="/blog">
                Blog
              </NavLink>
              <NavLink href="/contact">
                Contact
              </NavLink>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Steven Steinwand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
