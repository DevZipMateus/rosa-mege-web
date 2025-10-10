import { Menu, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.jpg";
const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  const navigation = [{
    name: "Início",
    id: "hero"
  }, {
    name: "Sobre",
    id: "sobre"
  }, {
    name: "Produtos",
    id: "produtos"
  }, {
    name: "Contato",
    id: "contato"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Feirão da Mobília" className="h-28 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-primary-foreground hover:text-accent transition-colors font-medium">
                {item.name}
              </button>)}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://wa.me/554999609800" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="mailto:rosaemegeservicos@gmail.com" className="text-primary-foreground hover:text-accent transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/feiraodamobilia?igsh=ZTU2ZHBobW42N2Nn&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/share/1Cnpogig67/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-lg font-medium hover:text-accent transition-colors">
                    {item.name}
                  </button>)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;