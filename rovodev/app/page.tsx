import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Palette, Code2, Camera, Users, Zap, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <h1 className="text-xl font-bold">PortfolioHub</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#templates" className="text-muted-foreground hover:text-foreground">
              Templates
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
          </nav>
          <div className="flex space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Create Your Professional Portfolio in Minutes
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build beautiful, responsive portfolios without coding. Perfect for designers, developers, 
            photographers, and creative professionals who want to showcase their work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/signup">
                Start Building for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#templates">View Examples</Link>
            </Button>
          </div>
          <div className="mt-12 text-sm text-muted-foreground">
            ✨ No credit card required • 🚀 Launch in 15 minutes • 📱 Mobile-optimized
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Everything You Need to Shine</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional tools and templates designed to help you create a portfolio that stands out
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Palette className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Beautiful Templates</CardTitle>
                <CardDescription>
                  Choose from professionally designed templates optimized for different creative fields
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Drag & Drop Builder</CardTitle>
                <CardDescription>
                  Intuitive editor with live preview. Add projects, reorder sections, and customize with ease
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Mobile Optimized</CardTitle>
                <CardDescription>
                  Your portfolio looks perfect on every device. Responsive design built-in
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Code2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Custom URLs</CardTitle>
                <CardDescription>
                  Get your own branded URL: yourname.portfoliohub.com or connect your custom domain
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Camera className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Media Management</CardTitle>
                <CardDescription>
                  Upload high-quality images, videos, and documents. Automatic optimization included
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>SEO Ready</CardTitle>
                <CardDescription>
                  Built for discovery. Optimized for search engines and social media sharing
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Showcase Your Work?</h3>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Join thousands of creatives who trust PortfolioHub to present their best work
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/signup">
              Create Your Portfolio Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="font-bold">PortfolioHub</span>
              </div>
              <p className="text-muted-foreground">
                The easiest way to create a professional portfolio that gets you noticed.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground">Features</Link></li>
                <li><Link href="#templates" className="hover:text-foreground">Templates</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/help" className="hover:text-foreground">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
                <li><Link href="/tutorials" className="hover:text-foreground">Tutorials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 PortfolioHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}