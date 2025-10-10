import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

// Import existing images
import balcaoPiaImage from "@/assets/balcao-pia.jpg";
import balcaoSimplesImage from "@/assets/balcao-simples.jpg";
import torreEstanteImage from "@/assets/torre-estante.jpg";
import paneleiroTorreImage from "@/assets/paneleiro-torre.jpg";
import aereoImage from "@/assets/aereo.jpg";
import cristaleiraImage from "@/assets/cristaleira.jpg";
import kitchenImage from "@/assets/furniture-kitchen.jpg";
import cama1Image from "@/assets/cama-1.jpeg";
import cama2Image from "@/assets/cama-2.jpeg";
import cama3Image from "@/assets/cama-3.jpeg";
import cama4Image from "@/assets/cama-4.jpeg";
import cama5Image from "@/assets/cama-5.jpeg";
import cama6Image from "@/assets/cama-6.jpeg";
import cozinhaCompacta1Image from "@/assets/cozinha-compacta-1.jpeg";
import cozinhaCompacta2Image from "@/assets/cozinha-compacta-2.jpeg";
import cozinhaCompacta3Image from "@/assets/cozinha-compacta-3.jpeg";
import cozinhaCompacta4Image from "@/assets/cozinha-compacta-4.jpeg";
import cozinhaCompacta5Image from "@/assets/cozinha-compacta-5.jpeg";
import cozinhaCompacta6Image from "@/assets/cozinha-compacta-6.jpeg";

interface Product {
  image: string;
  title: string;
  alt: string;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

const ProductsPage = () => {
  const categories: Category[] = [
    {
      id: "balcoes",
      name: "Balcões, Aéreos, Paneleiros e Torres",
      products: [
        {
          image: balcaoPiaImage,
          title: "Balcão com Pia",
          alt: "Balcão com pia integrada em madeira e preto",
        },
        {
          image: balcaoSimplesImage,
          title: "Balcão",
          alt: "Balcão de cozinha em madeira e preto",
        },
        {
          image: torreEstanteImage,
          title: "Torre com Nichos",
          alt: "Torre alta com nichos decorativos e armário",
        },
        {
          image: paneleiroTorreImage,
          title: "Paneleiro",
          alt: "Paneleiro torre alto em madeira",
        },
        {
          image: aereoImage,
          title: "Armário Aéreo",
          alt: "Armário aéreo em madeira clara",
        },
        {
          image: cristaleiraImage,
          title: "Cristaleira",
          alt: "Cristaleira com prateleiras de vidro e armário inferior",
        },
      ],
    },
    {
      id: "camas",
      name: "Camas",
      products: [
        {
          image: cama1Image,
          title: "Cama Box com Base Ripada",
          alt: "Cama box com base ripada em tons bege e marrom",
        },
        {
          image: cama2Image,
          title: "Cama Box Cinza",
          alt: "Cama box moderna em tons de cinza",
        },
        {
          image: cama3Image,
          title: "Cama Baú Cinza",
          alt: "Cama box com baú e sistema de elevação em cinza",
        },
        {
          image: cama4Image,
          title: "Cama Baú com Auxiliar",
          alt: "Cama box com baú e cama auxiliar em cinza",
        },
        {
          image: cama5Image,
          title: "Cama Box Vinho",
          alt: "Cama box elegante em tom vinho bordô",
        },
        {
          image: cama6Image,
          title: "Cama Box Solteiro Preta",
          alt: "Cama box de solteiro em preto com colchão estampado",
        },
      ],
    },
    {
      id: "cozinhas-compactas",
      name: "Cozinhas Compactas",
      products: [
        {
          image: cozinhaCompacta1Image,
          title: "Cozinha Compacta Cinza e Madeira",
          alt: "Cozinha compacta moderna com acabamento cinza e madeira",
        },
        {
          image: cozinhaCompacta2Image,
          title: "Cozinha Compacta com Pastilhas",
          alt: "Cozinha compacta elegante com detalhes em pastilhas",
        },
        {
          image: cozinhaCompacta3Image,
          title: "Cozinha Compacta com Nichos",
          alt: "Cozinha compacta funcional com nichos decorativos",
        },
        {
          image: cozinhaCompacta4Image,
          title: "Cozinha Compacta Preto e Madeira",
          alt: "Cozinha compacta em madeira com acabamento preto",
        },
        {
          image: cozinhaCompacta5Image,
          title: "Cozinha Compacta Off White",
          alt: "Cozinha compacta clean em tons off white",
        },
        {
          image: cozinhaCompacta6Image,
          title: "Cozinha Compacta Cinza Moderna",
          alt: "Cozinha compacta contemporânea em tons de cinza",
        },
      ],
    },
    {
      id: "cozinhas-moduladas",
      name: "Cozinhas Moduladas",
      products: [
        {
          image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800",
          title: "Cozinhas Moduladas",
          alt: "Cozinhas moduladas personalizadas",
        },
      ],
    },
    {
      id: "comodas",
      name: "Cômodas e Prateleiras",
      products: [
        {
          image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800",
          title: "Cômodas e Prateleiras",
          alt: "Cômodas e prateleiras para organização",
        },
      ],
    },
    {
      id: "eletros",
      name: "Eletros em Geral",
      products: [
        {
          image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
          title: "Eletros em Geral",
          alt: "Eletrodomésticos diversos",
        },
      ],
    },
    {
      id: "fogoes",
      name: "Fogões e Cooktops",
      products: [
        {
          image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=800",
          title: "Fogões e Cooktops",
          alt: "Fogões e cooktops modernos",
        },
      ],
    },
    {
      id: "mesas",
      name: "Mesas e Cadeiras",
      products: [
        {
          image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800",
          title: "Mesas e Cadeiras",
          alt: "Mesas e cadeiras para sala de jantar",
        },
      ],
    },
    {
      id: "sofas",
      name: "Sofás",
      products: [
        {
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
          title: "Sofás",
          alt: "Sofás confortáveis para sala de estar",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar para Início
              </Button>
            </Link>
          </div>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Catálogo de Produtos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore nossa linha completa de móveis e eletrodomésticos organizados por categoria
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-muted/50 p-2 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex-grow md:flex-grow-0 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
                  <p className="text-muted-foreground">
                    {category.products.length} {category.products.length === 1 ? "produto" : "produtos"} disponíveis
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product, index) => (
                    <div
                      key={index}
                      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-border"
                    >
                      <div className="relative h-64 overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {product.title}
                        </h3>
                        <a
                          href={`https://wa.me/554999609800?text=Olá! Gostaria de mais informações sobre: ${encodeURIComponent(product.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button className="w-full" variant="default">
                            Mais Informações
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default ProductsPage;
