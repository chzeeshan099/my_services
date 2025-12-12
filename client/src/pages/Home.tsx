import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Search, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="py-20 md:py-32 px-6 lg:px-8" data-testid="section-hero">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img
                src="/react.svg"
              alt="Company Logo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg animate-in zoom-in-50 duration-500"
              data-testid="img-hero-logo"
            />
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
            data-testid="text-hero-title"
          >
            Welcome to our Website
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
            data-testid="text-hero-description"
          >
            We provide professional web development and SEO services to help your business succeed in the digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <Link href="/services">
              <Button size="lg" className="px-8" data-testid="button-hero-services">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/order">
              <Button size="lg" variant="outline" className="px-8" data-testid="button-hero-order">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 lg:px-8 bg-card" data-testid="section-features">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Modern Development</h3>
              <p className="text-muted-foreground text-sm">
                Built with the latest technologies for optimal performance.
              </p>
            </div>
            
            <div className="text-center p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">SEO Optimized</h3>
              <p className="text-muted-foreground text-sm">
                Increase your visibility and reach more customers online.
              </p>
            </div>
            
            <div className="text-center p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">
                Exceptional designs that leave lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 lg:px-8" data-testid="section-services-cta">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-card rounded-lg border border-border">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2" data-testid="text-services-heading">
                Services
              </h2>
              <p className="text-muted-foreground">
                Discover how we can help transform your business
              </p>
            </div>
            
            <Link href="/services">
              <Button size="lg" className="px-10" data-testid="button-lift">
                Lift
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
