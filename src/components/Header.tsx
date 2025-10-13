import { Menu, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
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
      }, 100);
    } else {
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
    }
  };

  const handleProductsClick = () => {
    navigate("/produtos");
  };

  const navigation = [{
    name: "Início",
    id: "hero",
    action: () => scrollToSection("hero")
  }, {
    name: "Sobre",
    id: "sobre",
    action: () => scrollToSection("sobre")
  }, {
    name: "Produtos",
    id: "produtos",
    action: handleProductsClick
  }, {
    name: "Contato",
    id: "contato",
    action: () => scrollToSection("contato")
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Feirão da Mobília" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map(item => <button key={item.id} onClick={item.action} className="text-primary-foreground hover:text-accent transition-colors font-medium">
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
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-primary border-l border-primary-foreground/20">
              <div className="flex flex-col h-full">
                {/* Logo in mobile menu */}
                <div className="flex items-center justify-center py-6 border-b border-primary-foreground/20">
                  <img src={logo} alt="Feirão da Mobília" className="h-16 w-auto" />
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 mt-6 flex-1">
                  {navigation.map(item => <button key={item.id} onClick={item.action} className="text-left text-lg font-medium text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 px-4 py-3 rounded-lg transition-all">
                      {item.name}
                    </button>)}
                </nav>

                {/* Contact Info */}
                <div className="border-t border-primary-foreground/20 pt-6 pb-4">
                  <p className="text-primary-foreground/70 text-sm mb-4 px-4">Conecte-se conosco:</p>
                  <div className="flex items-center justify-center gap-6">
                    <a href="https://wa.me/554999609800" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors hover:scale-110 transform">
                      <Phone className="h-6 w-6" />
                    </a>
                    <a href="mailto:rosaemegeservicos@gmail.com" className="text-primary-foreground hover:text-accent transition-colors hover:scale-110 transform">
                      <Mail className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/feiraodamobilia?igsh=ZTU2ZHBobW42N2Nn&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors hover:scale-110 transform">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.facebook.com/share/1Cnpogig67/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors hover:scale-110 transform">
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;