import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-furniture.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Showroom moderno com móveis elegantes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Rosa & Mege Serviços Ltda
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 leading-relaxed">
            A loja de móveis que mais conecta acessibilidade, inovação e
            sustentabilidade, ajudando famílias a realizarem o sonho de renovar a casa sem abrir mão
            do bom gosto e da responsabilidade com o futuro.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12 italic">
            Feirão da Mobília - A loja do troca troca
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-lg"
            >
              <a href="https://wa.me/554999609800" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              asChild
              className="text-lg"
            >
              <a href="#produtos">
                Ver produtos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
