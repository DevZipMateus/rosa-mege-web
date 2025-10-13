import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Entre em contato
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-4">
            Visite nossa loja ou entre em contato conosco para mais informações sobre nossos produtos
            e serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Informações de contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Endereço</p>
                    <p className="text-muted-foreground">Av São Pedro 294 E</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Horário de funcionamento</p>
                    <p className="text-muted-foreground">Segunda à sexta: 08:00 às 12:00</p>
                    <p className="text-muted-foreground">Sábado: 08:00 às 16:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telefone</p>
                    <a
                      href="https://wa.me/554999609800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      (49) 99960-9800
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:rosaemegeservicos@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      rosaemegeservicos@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground mb-3">Redes sociais</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/feiraodamobilia?igsh=ZTU2ZHBobW42N2Nn&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1Cnpogig67/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-0 shadow-lg bg-primary">
            <CardContent className="p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Pronto para renovar sua casa?
              </h3>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                Entre em contato conosco pelo WhatsApp e descubra nossas ofertas especiais. Estamos
                prontos para ajudar você a transformar seu lar!
              </p>
              <Button
                variant="hero"
                size="lg"
                asChild
                className="w-full"
              >
                <a href="https://wa.me/554999609800" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5 mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
