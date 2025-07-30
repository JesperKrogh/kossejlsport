import { Anchor, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-6 w-6 text-primary-glow animate-sail" />
              <span className="text-xl font-bold">KØS Sejlsport</span>
            </div>
            <p className="text-sm text-background/80 mb-4">
              Ungdomsafdeling under KØS Sejlklub på Svanemöllen Havn. 
              Certificeret UNG KLUB med fokus på fællesskab, tryghed og sejlerglæde.
            </p>
            <p className="text-sm text-background/60">
              Sejleroplevelser til børn og unge i alderen 6-25 år.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hurtige Links</h3>
            <ul className="space-y-2">
              <li><a href="/aktiviteter" className="text-sm text-background/80 hover:text-primary-glow transition-colors">Aktiviteter</a></li>
              <li><a href="/joller" className="text-sm text-background/80 hover:text-primary-glow transition-colors">Vores Joller</a></li>
              <li><a href="/medlem" className="text-sm text-background/80 hover:text-primary-glow transition-colors">Bliv Medlem</a></li>
              <li><a href="/kalender" className="text-sm text-background/80 hover:text-primary-glow transition-colors">Kalender</a></li>
              <li><a href="/om" className="text-sm text-background/80 hover:text-primary-glow transition-colors">Om Klubben</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-glow" />
                <span className="text-sm text-background/80">
                  Svaneknoppen 5, 2100 København Ø
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-glow" />
                <a 
                  href="mailto:bestyrelsen@kossejlsport.dk" 
                  className="text-sm text-background/80 hover:text-primary-glow transition-colors"
                >
                  bestyrelsen@kossejlsport.dk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center">
          <p className="text-sm text-background/60">
            © 2024 KØS Sejlsport. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;