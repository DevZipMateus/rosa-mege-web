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
import cozinhaModulada1Image from "@/assets/cozinha-modulada-1.jpeg";
import cozinhaModulada2Image from "@/assets/cozinha-modulada-2.jpeg";
import cozinhaModulada3Image from "@/assets/cozinha-modulada-3.jpeg";
import cozinhaModulada4Image from "@/assets/cozinha-modulada-4.jpeg";
import cozinhaModulada5Image from "@/assets/cozinha-modulada-5.jpeg";
import cozinhaModulada6Image from "@/assets/cozinha-modulada-6.jpeg";
import comoda1Image from "@/assets/comoda-1.jpeg";
import comoda2Image from "@/assets/comoda-2.jpeg";
import comoda3Image from "@/assets/comoda-3.jpeg";
import comoda4Image from "@/assets/comoda-4.jpeg";
import comoda5Image from "@/assets/comoda-5.jpeg";
import comoda6Image from "@/assets/comoda-6.jpeg";
import eletro1Image from "@/assets/eletro-1.png";
import eletro2Image from "@/assets/eletro-2.jpeg";
import eletro3Image from "@/assets/eletro-3.jpeg";
import eletro4Image from "@/assets/eletro-4.webp";
import eletro5Image from "@/assets/eletro-5.webp";
import eletro6Image from "@/assets/eletro-6.webp";
import fogao1Image from "@/assets/fogao-1.jpeg";
import fogao2Image from "@/assets/fogao-2.jpeg";
import fogao3Image from "@/assets/fogao-3.jpeg";
import fogao4Image from "@/assets/fogao-4.jpeg";
import fogao5Image from "@/assets/fogao-5.jpeg";
import fogao6Image from "@/assets/fogao-6.jpeg";
import mesa1Image from "@/assets/mesa-1.jpeg";
import mesa2Image from "@/assets/mesa-2.jpeg";
import mesa3Image from "@/assets/mesa-3.jpeg";
import mesa4Image from "@/assets/mesa-4.jpeg";
import mesa5Image from "@/assets/mesa-5.jpeg";
import mesa6Image from "@/assets/mesa-6.png";
import roupeiro1Image from "@/assets/roupeiro-1.jpeg";
import roupeiro2Image from "@/assets/roupeiro-2.jpeg";
import roupeiro3Image from "@/assets/roupeiro-3.jpeg";
import roupeiro4Image from "@/assets/roupeiro-4.jpeg";
import roupeiro5Image from "@/assets/roupeiro-5.jpeg";
import roupeiro6Image from "@/assets/roupeiro-6.jpeg";
import sofa1Image from "@/assets/sofa-1.jpeg";
import sofa2Image from "@/assets/sofa-2.jpeg";
import sofa3Image from "@/assets/sofa-3.jpeg";
import sofa4Image from "@/assets/sofa-4.jpeg";
import sofa5Image from "@/assets/sofa-5.jpeg";
import sofa6Image from "@/assets/sofa-6.jpeg";

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
          image: cozinhaModulada1Image,
          title: "Cozinha Modulada Azul e Madeira",
          alt: "Cozinha modulada em L com armários azuis e madeira natural",
        },
        {
          image: cozinhaModulada2Image,
          title: "Cozinha Modulada Branca Moderna",
          alt: "Cozinha modulada branca compacta com eletros embutidos",
        },
        {
          image: cozinhaModulada3Image,
          title: "Cozinha Modulada Cinza com Cristaleira",
          alt: "Cozinha modulada em L cinza e madeira com cristaleira iluminada",
        },
        {
          image: cozinhaModulada4Image,
          title: "Cozinha Modulada com Ilha",
          alt: "Cozinha modulada azul marinho com ilha e bancada americana",
        },
        {
          image: cozinhaModulada5Image,
          title: "Cozinha Modulada Preto e Madeira",
          alt: "Cozinha modulada em L com armários pretos e madeira",
        },
        {
          image: cozinhaModulada6Image,
          title: "Cozinha Modulada Clara com Prateleiras",
          alt: "Cozinha modulada clara com prateleiras e cristaleira",
        },
      ],
    },
    {
      id: "comodas",
      name: "Cômodas e Prateleiras",
      products: [
        {
          image: comoda1Image,
          title: "Cômoda Compacta Off White",
          alt: "Cômoda compacta com 4 gavetas e 1 porta em acabamento off white e madeira",
        },
        {
          image: comoda2Image,
          title: "Cômoda Grande Off White",
          alt: "Cômoda grande com múltiplas gavetas, porta e rodízios em off white e madeira",
        },
        {
          image: comoda3Image,
          title: "Cômoda com Nicho e Espelho",
          alt: "Cômoda ampla com 6 gavetas, nicho lateral e espelho em off white e madeira",
        },
        {
          image: comoda4Image,
          title: "Cômoda Penteadeira com Espelho",
          alt: "Cômoda penteadeira com 4 gavetas e espelho panorâmico em madeira clara e branco",
        },
        {
          image: comoda5Image,
          title: "Cômoda Branca Compacta",
          alt: "Cômoda compacta com 4 gavetas e 1 porta em branco",
        },
        {
          image: comoda6Image,
          title: "Cômoda Madeira Natural",
          alt: "Cômoda com 4 gavetas em madeira natural",
        },
      ],
    },
    {
      id: "eletros",
      name: "Eletros em Geral",
      products: [
        {
          image: eletro1Image,
          title: "Liquidificador Mondial",
          alt: "Liquidificador Mondial preto com jarra de vidro, controles Turbo e Power",
        },
        {
          image: eletro2Image,
          title: "Lavadora Portátil",
          alt: "Lavadora portátil branca e cinza com painel digital",
        },
        {
          image: eletro3Image,
          title: "Geladeira Consul",
          alt: "Geladeira Consul duplex inox com freezer superior",
        },
        {
          image: eletro4Image,
          title: "Sanduicheira Grill",
          alt: "Sanduicheira grill antiaderente preta para sanduíches e grelhados",
        },
        {
          image: eletro5Image,
          title: "Micro-ondas Electrolux",
          alt: "Micro-ondas Electrolux branco com painel digital e 20 litros",
        },
        {
          image: eletro6Image,
          title: "Air Fryer Mondial 3,6L",
          alt: "Air fryer Mondial Pratic preta com capacidade de 3,6 litros e controles manuais",
        },
      ],
    },
    {
      id: "fogoes",
      name: "Fogões e Cooktops",
      products: [
        {
          image: fogao1Image,
          title: "Cooktop 5 Bocas Dako Mastercook",
          alt: "Cooktop embutir 5 bocas em vidro temperado preto com trempes de ferro",
        },
        {
          image: fogao2Image,
          title: "Cooktop 5 Bocas Dako",
          alt: "Cooktop de embutir com 5 bocas, vidro temperado preto e trempes reforçadas",
        },
        {
          image: fogao3Image,
          title: "Cooktop 4 Bocas Dako Mastercook",
          alt: "Cooktop de vidro temperado preto com 4 bocas e controles laterais",
        },
        {
          image: fogao4Image,
          title: "Fogão Clarice Delicato 4 Bocas Cinza",
          alt: "Fogão de piso 4 bocas cinza com forno limpa fácil e acendimento automático",
        },
        {
          image: fogao5Image,
          title: "Fogão Clarice Delicato 5 Bocas Branco",
          alt: "Fogão de piso 5 bocas branco com forno amplo e mesa de vidro temperado",
        },
        {
          image: fogao6Image,
          title: "Fogão Clarice Delicato 4 Bocas Cinza com Tampa",
          alt: "Fogão 4 bocas cinza com tampa de vidro protetora e forno amplo",
        },
      ],
    },
    {
      id: "mesas",
      name: "Mesas e Cadeiras",
      products: [
        {
          image: mesa1Image,
          title: "Mesa com 6 Cadeiras Branca Granito",
          alt: "Conjunto de mesa com 6 cadeiras brancas com tampo granito",
        },
        {
          image: mesa2Image,
          title: "Mesa Moderna Branca com 6 Cadeiras",
          alt: "Mesa de jantar branca moderna com 6 cadeiras estofadas",
        },
        {
          image: mesa3Image,
          title: "Mesa Preta com 6 Cadeiras Cinza",
          alt: "Conjunto mesa preta com tampo preto e 6 cadeiras estofadas cinza",
        },
        {
          image: mesa4Image,
          title: "Mesa Redonda com 4 Cadeiras Pretas",
          alt: "Mesa redonda com tampo amadeirado e 4 cadeiras pretas estofadas",
        },
        {
          image: mesa5Image,
          title: "Mesa Madeira com 6 Cadeiras Brancas",
          alt: "Mesa retangular amadeirada com 6 cadeiras brancas estofadas",
        },
        {
          image: mesa6Image,
          title: "Mesa Compacta Granito 4 Cadeiras",
          alt: "Conjunto compacto mesa granito com 4 cadeiras estofadas",
        },
      ],
    },
    {
      id: "sofas",
      name: "Sofás",
      products: [
        {
          image: sofa1Image,
          title: "Sofá Retrátil Off White",
          alt: "Sofá retrátil moderno em tecido off white com almofadas soltas",
        },
        {
          image: sofa2Image,
          title: "Sofá Retrátil e Reclinável Bege",
          alt: "Sofá amplo retrátil e reclinável em tecido bege com chaise",
        },
        {
          image: sofa3Image,
          title: "Sofá de Canto Retrátil Bege com Porta Copos",
          alt: "Sofá de canto retrátil em tecido bege com encosto capitonê e porta copos",
        },
        {
          image: sofa4Image,
          title: "Sofá de Canto Cinza Moderno",
          alt: "Sofá de canto em tecido cinza com encosto capitonê e design contemporâneo",
        },
        {
          image: sofa5Image,
          title: "Sofá 3 Lugares Cinza com Pés de Madeira",
          alt: "Sofá compacto 3 lugares em tecido cinza com base de madeira natural",
        },
        {
          image: sofa6Image,
          title: "Sofá Retrátil Caramelo",
          alt: "Sofá retrátil em tecido caramelo com encosto reclinável e chaise",
        },
      ],
    },
    {
      id: "roupeiros",
      name: "Roupeiros",
      products: [
        {
          image: roupeiro1Image,
          title: "Roupeiro de Correr Preto e Madeira",
          alt: "Roupeiro moderno com portas de correr em preto e acabamento amadeirado",
        },
        {
          image: roupeiro2Image,
          title: "Roupeiro 6 Portas com Espelho",
          alt: "Roupeiro amplo com 6 portas, espelho central e gavetas em madeira e off white",
        },
        {
          image: roupeiro3Image,
          title: "Roupeiro 8 Portas com Espelho",
          alt: "Roupeiro grande com 8 portas espelhadas em acabamento amadeirado",
        },
        {
          image: roupeiro4Image,
          title: "Roupeiro 6 Portas Branco com Puxadores Dourados",
          alt: "Roupeiro elegante branco com 6 portas e puxadores em acabamento dourado",
        },
        {
          image: roupeiro5Image,
          title: "Roupeiro com Cama Solteiro Integrada",
          alt: "Roupeiro funcional em madeira e branco com cama de solteiro integrada, nichos e gavetas",
        },
        {
          image: roupeiro6Image,
          title: "Roupeiro 4 Portas com Nicho e Gavetas",
          alt: "Roupeiro compacto em madeira e branco com 4 portas, nicho central e 3 gavetas",
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {category.products.map((product, index) => (
                    <div
                      key={index}
                      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-border"
                    >
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.alt}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
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
