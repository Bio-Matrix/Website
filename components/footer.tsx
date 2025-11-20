import { Instagram, Linkedin } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-emerald-900 pt-16 pb-8 px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <Logo variant="dark" className="mb-4" />
            <p className="text-emerald-800/80 mb-6 font-plus-jakarta">
              Bridging the gap between biological problems<br></br>and technological solutions
            </p>
            <div className="flex space-x-4">
              <a 
              href="https://www.instagram.com/biomatrix.club/" 
              className="text-emerald-800/80 hover:text-emerald-100 transition-colors" 
              aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/107725063/admin/dashboard/" className="text-emerald-800/80 hover:text-emerald-100 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-emerald-900 font-semibold text-lg mb-4 font-plus-jakarta">Contact Us</h3>
            <ul className="space-y-3 font-plus-jakarta">
              <li className="flex items-start">
                <span className="text-emerald-800/90">biomatrixclub@gmail.com</span>
              </li>
              <li className="text-emerald-800/80">
                <p>Technische Universität München</p>
                <p>Boltzmannstraße 11</p>
                <p>85748 Garching bei München</p>
              </li>
            </ul>
          </div>
        </div>

 
        {/*Bottom 
        <div className="pt-8 border-t border-emerald-800/10 text-sm text-emerald-800/70 flex flex-col md:flex-row justify-between items-center font-plus-jakarta">
          <p>BioMatrix</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/impressum" className="hover:text-emerald-900 transition-colors">
              Impressum
            </a>
          </div>
        </div>*/}
      </div>
    </footer>
  )
}
