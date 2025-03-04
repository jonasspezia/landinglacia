import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Transformando avaliações médicas subjetivas em análises objetivas e eficientes
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              O LaciaVisionLLM utiliza inteligência artificial avançada para substituir avaliações médicas demoradas e inconsistentes por um sistema de feedback preciso, personalizado e instantâneo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Agendar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#solucao" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/10 transition-colors"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Profissionais médicos analisando procedimentos com assistência de IA" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
