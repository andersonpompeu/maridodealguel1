import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { services } from '../data/services';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service?: ServiceItem;
  isSpecial?: boolean;
  title?: string;
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isSpecial, title, description }) => {
  if (isSpecial) {
    return (
      <div className="group p-8 rounded-[2rem] bg-primary/10 border border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col min-h-[320px]">
        <div className="absolute -right-10 -top-10 text-primary/10">
          <Icon name="emergency_home" className="text-[150px]" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-text-main">{title || 'Precisa de outra coisa?'}</h3>
            <p className="text-text-muted mb-6">{description || 'Realizamos diversos tipos de serviços personalizados. Entre em contato.'}</p>
          </div>
          <a href="#contato" className="w-full py-3 rounded-full bg-primary text-text-main font-bold hover:bg-[#e6e205] transition-colors text-center block shadow-sm">
            Pedir Orçamento
          </a>
        </div>
      </div>
    );
  }

  if (!service) return null;

  return (
    <Link 
      to={`/servico/${service.id}`}
      className="group p-8 rounded-[2rem] bg-white border border-border-color hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
        <Icon name={service.icon} className="text-2xl text-text-main" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-text-main flex items-center gap-2">
        {service.title}
        <Icon name="arrow_forward" className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
      </h3>
      <p className="text-text-muted mb-4 flex-grow">{service.description}</p>
      {service.features && (
        <ul className="text-sm text-text-main space-y-2 mt-auto">
          {service.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-center gap-2">
              <Icon name="check_circle" className="text-primary text-sm" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 pt-4 border-t border-gray-100 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Ver detalhes do serviço
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 px-6 max-w-[1280px] mx-auto">
      
      {/* Introduction Section */}
      <div className="mb-16 bg-white p-8 md:p-12 rounded-[2rem] border border-border-color shadow-sm">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-6">Seu marido de aluguel em Maringá</h2>
        <div className="prose prose-lg text-text-muted leading-relaxed">
          <p className="mb-4">
            O marido de aluguel é o famoso “faz tudo” que cuida dos pequenos reparos da sua casa ou apartamento, para deixar tudo funcionando como novo. Em vez de chamar vários profissionais diferentes, você resolve tudo com uma pessoa de confiança, economizando tempo e dinheiro.
          </p>
          <p>
            Atendimento para residências, escritórios, lojas e imobiliárias, sempre com foco em segurança, organização e respeito ao seu imóvel.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2 block">O Que Fazemos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight">Serviços de marido de aluguel em Maringá</h2>
        </div>
        <a href="#contato" className="text-text-main font-bold border-b-2 border-primary hover:bg-primary/10 px-2 py-1 transition-colors">Ver todos os serviços</a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        
        <ServiceCard 
          isSpecial={true} 
          title="Precisa de outra coisa?" 
          description="Realizamos diversos tipos de serviços personalizados. Entre em contato e descreva sua necessidade."
        />
      </div>
    </section>
  );
};

export default Services;