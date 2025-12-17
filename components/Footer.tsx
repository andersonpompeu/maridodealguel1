import React from 'react';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary text-text-main">
                <Icon name="handyman" className="text-sm" />
              </div>
              <h2 className="text-lg font-bold">Marido de Aluguel</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluções práticas e profissionais para sua casa ou escritório em Maringá. Qualidade, confiança e preço justo.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-primary">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Eletricista</a></li>
              <li><a href="#" className="hover:text-white">Encanador</a></li>
              <li><a href="#" className="hover:text-white">Pintor</a></li>
              <li><a href="#" className="hover:text-white">Montador de Móveis</a></li>
              <li><a href="#" className="hover:text-white">Instalações em Geral</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-primary">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#projetos" className="hover:text-white">Projetos</a></li>
              <li><a href="#" className="hover:text-white">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-white">Contato</a></li>
              <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-primary">Atendimento</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Icon name="location_on" className="text-primary text-lg mt-0.5" />
                <span>Av. Brasil, 1234 - Zona 01<br />Maringá - PR, 87000-000</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" className="text-primary text-lg" />
                <span>(44) 99876-5432</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="text-primary text-lg" />
                <span>contato@maridomaringa.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2024 Marido de Aluguel Maringá. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white font-bold italic">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white font-bold italic">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;