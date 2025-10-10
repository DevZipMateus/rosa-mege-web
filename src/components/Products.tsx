import { Card, CardContent } from "@/components/ui/card";
import kitchenImage from "@/assets/furniture-kitchen.jpg";
import balcaoPiaImage from "@/assets/balcao-pia.jpg";
import balcaoSimplesImage from "@/assets/balcao-simples.jpg";
import torreEstanteImage from "@/assets/torre-estante.jpg";
import paneleiroTorreImage from "@/assets/paneleiro-torre.jpg";
import aereoImage from "@/assets/aereo.jpg";
import cristaleiraImage from "@/assets/cristaleira.jpg";

const Products = () => {
  const products = [
    {
      image: kitchenImage,
      title: "Cozinhas Compactas",
      description: "Soluções completas e modernas para otimizar seu espaço com design elegante e funcionalidade",
      alt: "Cozinha compacta moderna em showroom elegante",
    },
    {
      image: balcaoPiaImage,
      title: "Balcão com Pia",
      description: "Balcão moderno com pia integrada, perfeito para otimizar o preparo de alimentos",
      alt: "Balcão com pia integrada em madeira e preto",
    },
    {
      image: balcaoSimplesImage,
      title: "Balcão",
      description: "Balcão versátil para armazenamento e organização da cozinha",
      alt: "Balcão de cozinha em madeira e preto",
    },
    {
      image: torreEstanteImage,
      title: "Torre com Nichos",
      description: "Torre moderna com nichos abertos e armário, ideal para expor e organizar",
      alt: "Torre alta com nichos decorativos e armário",
    },
    {
      image: paneleiroTorreImage,
      title: "Paneleiro",
      description: "Paneleiro alto com amplo espaço de armazenamento para utensílios",
      alt: "Paneleiro torre alto em madeira",
    },
    {
      image: aereoImage,
      title: "Armário Aéreo",
      description: "Armário aéreo em madeira natural para aproveitar o espaço vertical",
      alt: "Armário aéreo em madeira clara",
    },
    {
      image: cristaleiraImage,
      title: "Cristaleira",
      description: "Cristaleira elegante com prateleiras e compartimentos para louças e decoração",
      alt: "Cristaleira com prateleiras de vidro e armário inferior",
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos uma linha completa de móveis e eletros para transformar sua casa em um lar
            aconchegante e funcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
