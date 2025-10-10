import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import 2 images from each category
import balcaoPiaImage from "@/assets/balcao-pia.jpg";
import balcaoSimplesImage from "@/assets/balcao-simples.jpg";
import cama1Image from "@/assets/cama-1.jpeg";
import cama2Image from "@/assets/cama-2.jpeg";
import cozinhaCompacta1Image from "@/assets/cozinha-compacta-1.jpeg";
import cozinhaCompacta2Image from "@/assets/cozinha-compacta-2.jpeg";
import cozinhaModulada1Image from "@/assets/cozinha-modulada-1.jpeg";
import cozinhaModulada2Image from "@/assets/cozinha-modulada-2.jpeg";
import comoda1Image from "@/assets/comoda-1.jpeg";
import comoda2Image from "@/assets/comoda-2.jpeg";
import eletro1Image from "@/assets/eletro-1.png";
import eletro2Image from "@/assets/eletro-2.jpeg";
import fogao1Image from "@/assets/fogao-1.jpeg";
import fogao2Image from "@/assets/fogao-2.jpeg";
import mesa1Image from "@/assets/mesa-1.jpeg";
import mesa2Image from "@/assets/mesa-2.jpeg";
import sofa1Image from "@/assets/sofa-1.jpeg";
import sofa2Image from "@/assets/sofa-2.jpeg";
import roupeiro1Image from "@/assets/roupeiro-1.jpeg";
import roupeiro2Image from "@/assets/roupeiro-2.jpeg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";
import video3 from "@/assets/video-3.mp4";

const Products = () => {
  const productImages = [
    { image: balcaoPiaImage, alt: "Balcão com pia integrada em madeira e preto" },
    { image: balcaoSimplesImage, alt: "Balcão de cozinha em madeira e preto" },
    { image: cama1Image, alt: "Cama box com base ripada em tons bege e marrom" },
    { image: cama2Image, alt: "Cama box moderna em tons de cinza" },
    { image: cozinhaCompacta1Image, alt: "Cozinha compacta moderna com acabamento cinza e madeira" },
    { image: cozinhaCompacta2Image, alt: "Cozinha compacta elegante com detalhes em pastilhas" },
    { image: cozinhaModulada1Image, alt: "Cozinha modulada em L com armários azuis e madeira natural" },
    { image: cozinhaModulada2Image, alt: "Cozinha modulada branca compacta com eletros embutidos" },
    { image: comoda1Image, alt: "Cômoda compacta com 4 gavetas e 1 porta em acabamento off white e madeira" },
    { image: comoda2Image, alt: "Cômoda grande com múltiplas gavetas, porta e rodízios em off white e madeira" },
    { image: eletro1Image, alt: "Liquidificador Mondial preto com jarra de vidro" },
    { image: eletro2Image, alt: "Lavadora portátil branca e cinza com painel digital" },
    { image: fogao1Image, alt: "Cooktop 5 bocas em vidro temperado preto com trempes de ferro" },
    { image: fogao2Image, alt: "Cooktop de embutir com 5 bocas, vidro temperado preto" },
    { image: mesa1Image, alt: "Conjunto de mesa com 6 cadeiras brancas com tampo granito" },
    { image: mesa2Image, alt: "Mesa de jantar branca moderna com 6 cadeiras estofadas" },
    { image: sofa1Image, alt: "Sofá retrátil moderno em tecido off white com almofadas soltas" },
    { image: sofa2Image, alt: "Sofá amplo retrátil e reclinável em tecido bege com chaise" },
    { image: roupeiro1Image, alt: "Roupeiro moderno com portas de correr em preto e acabamento amadeirado" },
    { image: roupeiro2Image, alt: "Roupeiro amplo com 6 portas, espelho central e gavetas em madeira e off white" },
  ];

  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos Produtos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Oferecemos uma linha completa de móveis e eletros para transformar sua casa em um lar
              aconchegante e funcional.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full mb-8"
          >
            <CarouselContent>
              {productImages.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-2">
                    <Card className="overflow-hidden border-border">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden bg-muted">
                          <img
                            src={product.image}
                            alt={product.alt}
                            className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <video
              src={video1}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto max-h-[480px] rounded-lg object-contain"
            />
            <video
              src={video2}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto max-h-[480px] rounded-lg object-contain"
            />
            <video
              src={video3}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto max-h-[480px] rounded-lg object-contain"
            />
          </div>

          <div className="text-center">
            <Link to="/produtos">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                Ver Catálogo Completo
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
