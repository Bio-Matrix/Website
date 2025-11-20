"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Logo from "@/components/logo"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Projects", href: "/#projects" },
  { name: "Pillars", href: "/#core-pillars" },
  { name: "About", href: "/#about" },
  { name: "Team", href: "/team" },
  //{ name: "Join Us", href: "#join" },
  { name: "Contact", href: "#contact" },
]

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent background scroll
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"  
    }
  }, [mobileMenuOpen])

  return (
    <>
        <header
          className={cn(
            "fixed top-0 left-0 right-0 z-50 h-[88px] transition-all duration-300",
            !isHome
              ? "bg-emerald-900 shadow-sm"
              : isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
                : "bg-transparent"
          )}
        >

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <Logo variant={!isHome ? "light" : isScrolled ? "dark" : "light"} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm xl:text-base font-medium transition-colors relative group py-2",
                  isHome && isScrolled ? "text-gray-700 hover:text-[rgb(46,118,94)]" : "text-white hover:text-white/80",
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out",
                    isHome && isScrolled ? "bg-[rgb(46,118,94)]" : "bg-white",
                  )}
                />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden h-10 w-10 p-0",
              isScrolled
                ? "text-gray-600 hover:text-[rgb(46,118,94)] hover:bg-gray-100"
                : "text-white hover:text-white/80 hover:bg-white/10",
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
            <Logo variant="dark" />
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 p-0 text-gray-600 hover:text-[rgb(46,118,94)] hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu Navigation */}
          <nav className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-4 text-base font-medium text-gray-700 hover:text-[rgb(46,118,94)] hover:bg-gray-50 rounded-lg transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: mobileMenuOpen ? "slideInFromRight 0.3s ease-out forwards" : "none",
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 sm:p-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">Student Research Club</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
