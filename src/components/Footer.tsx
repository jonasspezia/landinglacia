import React from 'react';
import { Brain, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Brain className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">LaciaVisionLLM</span>
            </a>
            <p className="text-gray-400 mb-4">
              Transformando avaliações médicas subjetivas em análises objetivas e eficientes com tecnologia de IA avançada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Plataforma</h3>
            <ul className="space-y-2">
              <li><a href="#recursos" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Módulos Disponíveis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrações</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Segurança e Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centro de Conhecimento</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Estudos de Caso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">White Papers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span className="text-gray-400">Av. Paulista, 1106 - 7º andar<br />São Paulo, SP - 01310-100</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <a href="tel:+551140028922" className="text-gray-400 hover:text-white transition-colors">(11) 4002-8922</a>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <a href="mailto:contato@laciavisionllm.com.br" className="text-gray-400 hover:text-white transition-colors">contato@laciavisionllm.com.br</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; 2023 LaciaVisionLLM. Todos os direitos reservados.
          </p>
          <div className="space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
