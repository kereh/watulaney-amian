import { Heart } from "lucide-react";

export function FooterMain() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Village Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Watulaney Amian
            </h3>
            <p className="text-muted-foreground mb-4">
              A peaceful village community committed to preserving our heritage
              while embracing progress for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: village@watulaneyamian.id</p>
              <p>Phone: +62 XXX-XXXX-XXXX</p>
              <p>Address: Watulaney Amian Village</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Watulaney Amian.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Created by KKN UNSRIT - XXIV
          </p>
        </div>
      </div>
    </footer>
  );
}
