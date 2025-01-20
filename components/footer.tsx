import Link from 'next/link'
import { Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Zain Technologies</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with cutting-edge technology solutions for a digital future.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="text-sm text-muted-foreground hover:text-primary">Web Development</Link></li>
              <li><Link href="/services/email-solutions" className="text-sm text-muted-foreground hover:text-primary">Email Solutions</Link></li>
              <li><Link href="/services/network" className="text-sm text-muted-foreground hover:text-primary">Network Design</Link></li>
              <li><Link href="/services/security" className="text-sm text-muted-foreground hover:text-primary">Cyber Security</Link></li>
              <li><Link href="/services/marketing" className="text-sm text-muted-foreground hover:text-primary">Digital Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary">Portfolio</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Business Avenue</li>
              <li>Dhaka, Bangladesh</li>
              <li>Phone: +880 1234-567890</li>
              <li>Email: info@zaintech.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Zain Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}