"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Logo from "@/components/logo"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "News", href: "#news" },
  { name: "Join Us", href: "#join" },
  { name: "Contact", href: "#contact" },
]

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/70 backdrop-blur-xl shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <Logo variant={isScrolled ? "dark" : "light"} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors relative group",
                isScrolled ? "text-gray-700 hover:text-[rgb(46,118,94)]" : "text-white hover:text-white/80"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out",
                isScrolled ? "bg-[rgb(46,118,94)]" : "bg-white"
              )} />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            isScrolled ? "text-gray-600 hover:text-[rgb(46,118,94)]" : "text-white hover:text-white/80"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={cn(
          "md:hidden",
          isScrolled ? "bg-white/70 backdrop-blur-xl" : "bg-black/80 backdrop-blur-sm"
        )}>
          <nav className="container mx-auto px-8 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors",
                  isScrolled ? "text-gray-600 hover:text-[rgb(46,118,94)]" : "text-white hover:text-white/80"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
