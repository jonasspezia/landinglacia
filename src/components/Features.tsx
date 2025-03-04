import React from 'react';
import { Video, LineChart, CheckSquare, Store, Clock, ShieldCheck, Sparkles, Users } from 'lucide-react';

const Features: React.FC = () => {
  const coreComponents = [
    {
      icon: <Video className="h-10 w-10 text-indigo-600" />,
      title: "Análise Avançada de Vídeo",
      description: "Processamento de imagem em tempo real que identifica instrumentos, técnicas e padrões de movimento durante procedimentos médicos.",
      features: [
        "Reconhecimento de instrumentos cirúrgicos e médicos",
        "Detecção de posicionamento e técnicas de manuseio",
        "Rastreamento de movimento das mãos e instrumentos",
        "Identificação de etapas críticas do procedimento"
      ]
    },
    {
      icon: <LineChart className="h-10 w-10 text-indigo-600" />,
      title: "Feedback Personalizado",
      description: "Avaliações detalhadas com insights específicos para cada profissional, focados em seus pontos fortes e áreas de melhoria.",
      features: [
        "Análise comparativa com procedimentos de referência",
        "Identificação de padrões e tendências ao longo do tempo",
        "Recomendações para aperfeiçoamento técnico",
        "Métricas quantitativas de desempenho"
      ]
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-indigo-600" />,
      title: "Listas de Verificação Personalizáveis",
      description: "Critérios de avaliação flexíveis que podem ser adaptados às diretrizes institucionais e às melhores práticas da especialidade.",
      features: [
        "Editor visual de protocolos e checklists",
        "Suporte a múltiplas versões de procedimentos",
        "Integração com diretrizes de sociedades médicas",
        "Atualização automática baseada em novas evidências"
      ]
    },
    {
      icon: <Store className="h-10 w-10 text-indigo-600" />,
      title: "Marketplace de Módulos",
      description: "Biblioteca extensa de módulos específicos para diferentes especialidades e procedimentos médicos, continuamente atualizada.",
      features: [
        "Módulos por especialidade (cardiologia, ortopedia, etc.)",
        "Atualizações regulares com novas técnicas",
        "Desenvolvimento colaborativo com instituições parceiras",
        "Customização para necessidades específicas"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Clock />,
      title: "Avaliação em Tempo Real",
      description: "Feedback imediato durante o treinamento, permitindo correções no momento da aprendizagem."
    },
    {
      icon: <ShieldCheck />,
      title: "Privacidade Avançada",
      description: "Proteção de dados de pacientes com anonimização automática e processamento local."
    },
    {
      icon: <Sparkles />,
      title: "Inteligência Adaptativa",
      description: "O sistema evolui com o uso, melhorando continuamente sua precisão e relevância."
    },
    {
      icon: <Users />,
      title: "Colaboração Multi-institucional",
      description: "Compartilhamento seguro de dados de treinamento entre instituições parceiras."
    }
  ];

  return (
    <section id="recursos" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Componentes Principais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma integra tecnologias inovadoras para fornecer uma solução completa de avaliação e aprendizado médico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {coreComponents.map((component, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-indigo-50 p-4 inline-block rounded-lg mb-6">
                {component.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{component.title}</h3>
              <p className="text-gray-600 mb-6">{component.description}</p>
              <ul className="space-y-2">
                {component.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-indigo-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-8 text-center">Arquitetura Técnica e Acessibilidade</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium mb-4">Infraestrutura Robusta</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Processamento híbrido (local e em nuvem) para velocidade e segurança</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Compatibilidade com sistemas de câmeras existentes e equipamentos médicos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>APIs abertas para integração com sistemas de gestão educacional e EMRs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Armazenamento seguro e criptografado para registros de procedimentos e avaliações</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-4">Foco em Usabilidade</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Interface intuitiva projetada para uso em ambientes clínicos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Aplicativos mobile para acesso a relatórios e feedbacks em qualquer lugar</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dashboards personalizáveis para administradores e educadores</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Suporte a múltiplos idiomas e adaptação a protocolos regionais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-indigo-50 p-3 rounded-full inline-flex items-center justify-center mb-4">
                {React.cloneElement(feature.icon, { className: "h-6 w-6 text-indigo-600" })}
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
