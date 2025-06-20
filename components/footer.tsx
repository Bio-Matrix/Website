import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer id="contact" className="bg-emerald-900 text-emerald-100 pt-16 pb-8 px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <Logo variant="light" className="mb-4" />
            <p className="text-emerald-100/80 mb-6 font-plus-jakarta">
              Bridging the gap between biological problems<br></br>and technological solutions
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-100/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-emerald-100/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-emerald-100/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-emerald-100/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-plus-jakarta">Contact Us</h3>
            <ul className="space-y-3 font-plus-jakarta">
              <li className="flex items-start">
                <span className="text-emerald-100/90">biomatrixclub@gmail.com</span>
              </li>
              <li className="text-emerald-100/80">
                <p>Technische Universität München</p>
                <p>Boltzmannstraße 11</p>
                <p>85748 Garching bei München</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-emerald-800 text-sm text-emerald-100/70 flex flex-col md:flex-row justify-between items-center font-plus-jakarta">
          <p>© 2025 BioMetrics. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
