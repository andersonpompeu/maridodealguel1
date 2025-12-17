import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Icon from './Icon';
import { services } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <Icon name="build" className="text-6xl text-text-muted mb-4" />
        <h1 className="text-3xl font-bold text-text-main mb-4">Serviço não encontrado</h1>
        <p className="text-text-muted mb-8">O serviço que você está procurando não existe ou foi removido.</p>
        <button 
          onClick={() => navigate('/')} 
          className="px-6 py-3 bg-primary text-text-main font-bold rounded-full hover:bg-[#e6e205] transition-colors"
        >
          Voltar para Início
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* Hero Header for Service */}
      <div className="bg-background-dark text-white pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
             <Icon name={service.icon} className="absolute -right-10 -bottom-20 text-[300px]" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <Icon name="chevron_right" className="text-xs" />
            <Link to="/#servicos" className="hover:text-primary transition-colors">Serviços</Link>
            <Icon name="chevron_right" className="text-xs" />
            <span className="text-white font-medium">{service.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="size-24 md:size-32 rounded-[2rem] bg-primary flex items-center justify-center shrink-0 shadow-xl">
              <Icon name={service.icon} className="text-5xl md:text-7xl text-text-main" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">{service.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-text-main mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Sobre o Serviço
            </h2>
            <div className="prose prose-lg text-text-muted leading-relaxed">
              <p className="text-lg mb-4">{service.longDescription}</p>
            </div>
          </section>

          {service.benefits && (
            <section className="bg-background-light p-8 rounded-[2rem] border border-border-color">
              <h2 className="text-2xl font-bold text-text-main mb-6">Por que contratar este serviço?</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0 size-6 rounded-full bg-primary/20 text-text-main flex items-center justify-center">
                      <Icon name="check" className="text-sm font-bold" />
                    </div>
                    <span className="text-text-main font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {service.detailedFeatures && (
            <section>
              <h2 className="text-2xl font-bold text-text-main mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                O que está incluído
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                 {service.detailedFeatures.map((feature, index) => (
                   <div key={index} className="flex items-center gap-3 p-3 hover:bg-background-light rounded-xl transition-colors border-b border-gray-100 last:border-0 sm:border-0">
                     <Icon name="handyman" className="text-primary" />
                     <span className="text-text-muted">{feature}</span>
                   </div>
                 ))}
              </div>
            </section>
          )}
          
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-1 space-y-8">
           <div className="sticky top-28 space-y-6">
             {/* CTA Card */}
             <div className="bg-white p-8 rounded-[2rem] border border-border-color shadow-xl text-center">
               <h3 className="text-xl font-bold text-text-main mb-2">Precisa deste serviço?</h3>
               <p className="text-text-muted mb-6 text-sm">Solicite um orçamento sem compromisso agora mesmo.</p>
               
               <a 
                 href="https://wa.me/5544998765432" 
                 target="_blank" 
                 rel="noreferrer"
                 className="flex items-center justify-center w-full py-4 rounded-xl bg-[#25D366] text-white font-bold hover:brightness-110 transition-all shadow-lg mb-4 gap-2"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                 </svg>
                 Chamar no WhatsApp
               </a>
               
               <a 
                 href="#contato" 
                 className="flex items-center justify-center w-full py-4 rounded-xl bg-primary text-text-main font-bold hover:bg-[#e6e205] transition-all shadow-lg"
               >
                 Solicitar Orçamento
               </a>
             </div>

             {/* Guarantee Card */}
             <div className="bg-background-light p-6 rounded-[2rem] border border-border-color flex items-center gap-4">
                <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                  <Icon name="verified" />
                </div>
                <div>
                  <h4 className="font-bold text-text-main">Garantia Total</h4>
                  <p className="text-xs text-text-muted">Serviço com 90 dias de garantia.</p>
                </div>
             </div>
           </div>
        </div>
      </div>
      
      {/* Related Services CTA */}
      <div className="bg-primary/10 py-16 px-6 mt-12 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6">Não encontrou exatamente o que precisa?</h2>
          <p className="text-text-muted mb-8 text-lg">Realizamos diversos tipos de reparos personalizados. Entre em contato e explique sua necessidade para nossa equipe.</p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link to="/#servicos" className="px-8 py-3 bg-white text-text-main font-bold rounded-full hover:bg-gray-50 shadow-md">
               Ver outros serviços
             </Link>
             <Link to="/#contato" className="px-8 py-3 bg-primary text-text-main font-bold rounded-full hover:bg-[#e6e205] shadow-md">
               Fale Conosco
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;