import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  main: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/meSangeet", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/sangeet-sharma", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/me_sangeet", icon: Twitter },
    { name: "Email", href: "mailto:contact@sangeet.co", icon: Mail },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Sangeet.
            </Link>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer crafting digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex space-x-2">
              {footerLinks.social.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sangeet Sharma. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" /> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
