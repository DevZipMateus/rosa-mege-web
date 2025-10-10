import { Card, CardContent } from "@/components/ui/card";
import modularImage from "@/assets/furniture-modular.jpg";
import sofasImage from "@/assets/furniture-sofas.jpg";
import eletroImage from "@/assets/furniture-eletro.jpg";

const Products = () => {
  const products = [
    {
      image: modularImage,
      title: "Móveis sob medida e modulados",
      description: "Roupeiros, mesas, cadeiras personalizadas para seu espaço",
      alt: "Móveis modulados modernos em showroom elegante",
    },
    {
      image: sofasImage,
      title: "Conforto para sua casa",
      description: "Colchões, box, poltronas e sofás de alta qualidade",
      alt: "Sofás e poltronas confortáveis em ambiente acolhedor",
    },
    {
      image: eletroImage,
      title: "Linha eletro",
      description: "Eletrodomésticos e eletrônicos para completar seu lar",
      alt: "Eletrodomésticos modernos em cozinha elegante",
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
