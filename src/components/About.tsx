import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Recycle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "União familiar",
      description: "Surgimos em setembro de 2023 com a união de uma família dedicada a transformar lares.",
    },
    {
      icon: Sparkles,
      title: "Inovação",
      description: "Trazemos as melhores soluções em móveis e eletros com design moderno e funcional.",
    },
    {
      icon: Recycle,
      title: "Sustentabilidade",
      description: "Comprometidos com o futuro, oferecemos opções sustentáveis e acessíveis.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Sobre nós
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-4">
            Atuamos no comércio de móveis e eletros, oferecendo soluções completas para renovar sua
            casa com qualidade, acessibilidade e bom gosto. Nossa missão é conectar pessoas aos seus
            sonhos de lar através de produtos inovadores e sustentáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
