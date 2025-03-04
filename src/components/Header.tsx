import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900">LaciaVisionLLM</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#problema" className="text-gray-600 hover:text-indigo-600 font-medium">Problema</a>
          <a href="#solucao" className="text-gray-600 hover:text-indigo-600 font-medium">Solução</a>
          <a href="#recursos" className="text-gray-600 hover:text-indigo-600 font-medium">Recursos</a>
          <a href="#beneficios" className="text-gray-600 hover:text-indigo-600 font-medium">Benefícios</a>
          <a href="#casos" className="text-gray-600 hover:text-indigo-600 font-medium">Casos de Uso</a>
        </nav>
        
        <a 
          href="#contato" 
          className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Agendar Demo
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 p-4 shadow-md z-50">
          <div className="flex flex-col space-y-4">
            <a 
              href="#problema" 
              className="text-gray-600 hover:text-indigo-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Problema
            </a>
            <a 
              href="#solucao" 
              className="text-gray-600 hover:text-indigo-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Solução
            </a>
            <a 
              href="#recursos" 
              className="text-gray-600 hover:text-indigo-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#beneficios" 
              className="text-gray-600 hover:text-indigo-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#casos" 
              className="text-gray-600 hover:text-indigo-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Casos de Uso
            </a>
            <a 
              href="#contato" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
