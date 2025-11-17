import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <img src={logo} alt="Feirão da Mobília" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Qualidade e preço justo em móveis planejados para transformar sua casa em um lar.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("produtos")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">Av São Pedro 294 E</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-primary-foreground/80" />
                <a
                  href="https://wa.me/5549988666107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  (49) 98866-6107
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-primary-foreground/80" />
                <a
                  href="mailto:rosaemegeservicos@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm break-all"
                >
                  rosaemegeservicos@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horário e Redes Sociais */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horário</h3>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="h-4 w-4 mt-1 flex-shrink-0 text-primary-foreground/80" />
              <div className="text-sm text-primary-foreground/80">
                <p>Seg-Sex: 08:00-12:00</p>
                <p>13:30-18:30</p>
                <p>Sáb: 08:00-16:00</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/feiraodamobilia?igsh=ZTU2ZHBobW42N2Nn&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:scale-110 transform"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/1Cnpogig67/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:scale-110 transform"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Feirão da Mobília. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
