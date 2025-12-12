import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Search, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    icon: Code,
    features: [
      "Responsive design for all devices",
      "Fast loading and optimized performance",
      "Modern frameworks and best practices",
      "Secure and scalable architecture",
    ],
  },
  {
    id: "seo",
    title: "SEO",
    description: "Search engine optimization services to improve your visibility and drive organic traffic to your website.",
    icon: Search,
    features: [
      "Keyword research and strategy",
      "On-page and off-page optimization",
      "Technical SEO audits",
      "Monthly performance reports",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="py-16 md:py-24 px-6 lg:px-8" data-testid="section-services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500"
              data-testid="text-services-title"
            >
              Services
            </h1>
            <p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
              data-testid="text-services-description"
            >
              Professional services tailored to help your business grow and succeed in the digital landscape.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                data-testid={`card-service-${service.id}`}
              >
                <div className="flex flex-col lg:flex-row">
                  <CardHeader className="lg:w-1/3 bg-card">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl" data-testid={`text-service-title-${service.id}`}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base" data-testid={`text-service-desc-${service.id}`}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <Link href="/order">
              <Button size="lg" className="px-10" data-testid="button-order">
                Order
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
