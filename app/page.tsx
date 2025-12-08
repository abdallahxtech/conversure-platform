import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, TrendingUp, Users, Zap, CheckCircle2, ArrowRight, BarChart3, Clock } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import { PricingSection } from "@/components/PricingSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground">Conversure</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link href="/login">
                <Button variant="ghost" size="sm" aria-label="Log In to Conversure" id="nav-login-btn">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" aria-label="Start Free Trial" id="nav-signup-btn">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border text-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Automate Conversations. Accelerate Deals.</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Built for UAE Real Estate — Powered by AI
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Talk Smarter. Close Faster.
            </p>

            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
              The intelligence layer between WhatsApp and your CRM. Conversure helps UAE real estate agencies manage
              conversations, track leads, and close deals faster with AI-powered automation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="text-base px-8 shadow-lg hover:shadow-xl transition-shadow"
                  aria-label="Start Free Trial - Sign Up"
                  id="hero-signup-btn"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="#contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 bg-transparent border-2 hover:bg-primary/5"
                  aria-label="Book a Demo - Contact Us"
                  id="hero-demo-btn"
                >
                  Book Demo
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-lg text-muted-foreground">
              Built specifically for UAE real estate agencies with WhatsApp at the center
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              aria-label="WhatsApp Integration Feature"
              id="feature-whatsapp"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>WhatsApp Integration</CardTitle>
                <CardDescription>
                  Connect your WhatsApp Business API and start managing conversations from one central dashboard
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group"
              aria-label="Bitrix24 CRM Sync Feature"
              id="feature-bitrix"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Bitrix24 CRM Sync</CardTitle>
                <CardDescription>
                  Automatic two-way sync between WhatsApp conversations and your Bitrix24 CRM leads and deals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              aria-label="Agent Management Feature"
              id="feature-agents"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Agent Management</CardTitle>
                <CardDescription>
                  Assign conversations to agents, set daily quotas, and track performance across your team
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group"
              aria-label="Smart Warm-up Feature"
              id="feature-warmup"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Smart Warm-up</CardTitle>
                <CardDescription>
                  4-week progressive warm-up plan to build sender reputation and avoid WhatsApp blocks
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              aria-label="Real-time Analytics Feature"
              id="feature-analytics"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Real-time Analytics</CardTitle>
                <CardDescription>
                  Track response times, conversion rates, and agent performance with detailed analytics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group"
              aria-label="Template Messages Feature"
              id="feature-templates"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Template Messages</CardTitle>
                <CardDescription>
                  Send pre-approved WhatsApp templates for marketing, viewings, and follow-ups at scale
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Get started in minutes</h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to transform your WhatsApp into a powerful sales tool
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Connect Your Accounts</h3>
              <p className="text-muted-foreground">
                Link your WhatsApp Business API and Bitrix24 CRM in under 5 minutes
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Invite Your Team</h3>
              <p className="text-muted-foreground">Add agents, set permissions, and configure daily messaging quotas</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Start Closing Deals</h3>
              <p className="text-muted-foreground">
                Manage conversations, track leads, and accelerate your sales pipeline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to transform your real estate business?</h2>
          <p className="text-xl text-primary-foreground/90">
            Join leading UAE real estate agencies using Conversure to close more deals
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/signup">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-base px-8 shadow-xl hover:shadow-2xl transition-shadow"
                aria-label="Start Free Trial - Get Started"
                id="cta-signup-btn"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/agents/register">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all"
                aria-label="Become an Agent - Register"
                id="cta-agent-btn"
              >
                Become an Agent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Conversure</span>
              </div>
              <p className="text-sm text-muted-foreground">The intelligence layer between WhatsApp and your CRM</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-foreground">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/docs" className="hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-foreground">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/agents/register" className="hover:text-foreground">
                    Become an Agent
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Conversure. All rights reserved. Built for UAE Real Estate.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
