import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Oferecemos uma linha completa de móveis e eletros para transformar sua casa em um lar
            aconchegante e funcional.
          </p>
          <Link to="/produtos">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              Ver Catálogo Completo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
