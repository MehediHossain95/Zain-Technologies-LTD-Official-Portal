import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Code, Mail, Network, BarChart } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "Custom web applications and responsive websites built with cutting-edge technologies."
    },
    {
      icon: <Mail className="h-10 w-10" />,
      title: "Email Solutions",
      description: "Secure and reliable email infrastructure for your business communications."
    },
    {
      icon: <Network className="h-10 w-10" />,
      title: "Network Design",
      description: "Scalable network architecture and infrastructure solutions."
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets."
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Transforming Businesses Through Technology
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering your business with innovative IT solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help your business grow and succeed.
          </p>
          <Button size="lg">Contact Us Today</Button>
        </div>
      </section>
    </div>
  )
}