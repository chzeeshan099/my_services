import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://via.placeholder.com/32x32/3b82f6/ffffff?text=L"
                alt="Company Logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-semibold text-foreground">MyBrand</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional web development and SEO services to help your business grow online.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-home">
                Home
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-services">
                Services
              </Link>
              <Link href="/order" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-order">
                Order
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm">
              <span>hello@mybrand.com</span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p data-testid="text-copyright">&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
