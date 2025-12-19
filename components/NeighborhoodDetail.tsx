import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Icon from './Icon';
import { neighborhoods } from '../data/neighborhoods';
import { services } from '../data/services';

const NeighborhoodDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const neighborhood = neighborhoods.find((n) => n.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!neighborhood) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <Icon name="location_off" className="text-6xl text-text-muted mb-4" />
        <h1 className="text-3xl font-bold text-text-main mb-4">Localização não encontrada</h1>
        <p className="text-text-muted mb-8">Não encontramos informações específicas para este bairro em nossa base, mas provavelmente atendemos sua região!</p>
        <div className="flex gap-4">
            <button 
            onClick={() => navigate('/')} 
            className="px-6 py-3 bg-white border border-border-color text-text-main font-bold rounded-full hover:bg-gray-50 transition-colors"
            >
            Voltar
            </button>
            <a 
            href="https://wa.me/5544998765432" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 bg-primary text-text-main font-bold rounded-full hover:bg-[#e6e205] transition-colors"
            >
            Consultar no WhatsApp
            </a>
        </div>
      </div>
    );
  }

  // Choose 3 random services to display as "Popular in this area"
  const relevantServices = services.slice(0, 3);

  return (
    <article className="animate-fade-in bg-white min-h-screen">
      {/* Hero / Header */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${neighborhood.image}")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-[1280px] mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 font-medium">
                <Link to="/" className="hover:text-primary transition-colors">Início</Link>
                <Icon name="chevron_right" className="text-xs" />
                <span className="text-white">Áreas de Atendimento</span>
                <Icon name="chevron_right" className="text-xs" />
                <span className="text-primary">{neighborhood.shortName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
                Marido de Aluguel em <span className="text-primary">{neighborhood.name}</span>
            </h1>
            <p className="text-xl text-gray-200 font-light max-w-2xl">
                {neighborhood.description}
            </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2">
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-text-main mb-6 flex items-center gap-2">
                    <Icon name="location_on" className="text-primary" />
                    Atendimento Especializado na Região
                </h2>
                <div className="prose prose-lg text-text-muted leading-relaxed text-justify">
                    <p>{neighborhood.fullDescription}</p>
                </div>
                
                {/* SEO Keywords Block */}
                <div className="mt-8 bg-background-light p-6 rounded-2xl border border-border-color">
                    <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Serviços frequentes em {neighborhood.shortName}</h3>
                    <div className="flex flex-wrap gap-2">
                        {neighborhood.keywords.map((keyword, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white border border-border-color rounded-md text-sm text-text-muted">
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Neighborhood Specific FAQ Section */}
            {neighborhood.faqs && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-text-main mb-6 flex items-center gap-2">
                    <Icon name="help" className="text-primary" />
                    Dúvidas Frequentes em {neighborhood.shortName}
                </h2>
                <div className="space-y-4">
                  {neighborhood.faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-border-color rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-text-main text-lg mb-3 flex items-start gap-3">
                        <Icon name="question_answer" className="text-primary shrink-0 mt-1" />
                        {faq.question}
                      </h3>
                      <p className="text-text-muted leading-relaxed ml-9">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
                <h2 className="text-2xl font-bold text-text-main mb-6">Serviços Populares em {neighborhood.shortName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relevantServices.map((service) => (
                        <Link to={`/servico/${service.id}`} key={service.id} className="flex gap-4 p-4 rounded-2xl bg-white border border-border-color hover:border-primary/50 hover:shadow-md transition-all group">
                            <div className="shrink-0 size-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-text-main transition-colors text-primary">
                                <Icon name={service.icon} />
                            </div>
                            <div>
                                <h3 className="font-bold text-text-main group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-sm text-text-muted line-clamp-2 mt-1">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-28">
                <div className="bg-background-dark text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
                    
                    <h3 className="text-2xl font-bold mb-2">Está em {neighborhood.shortName}?</h3>
                    <p className="text-gray-400 mb-6">Nossa equipe está próxima e pronta para atender sua urgência.</p>
                    
                    <div className="space-y-4">
                        <a 
                            href="https://wa.me/5544998765432" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center w-full py-4 rounded-xl bg-[#25D366] text-white font-bold hover:brightness-110 transition-all shadow-lg gap-2"
                        >
                            <Icon name="chat" />
                            Chamar no WhatsApp
                        </a>
                        <Link 
                            to="/quiz"
                            className="flex items-center justify-center w-full py-4 rounded-xl bg-white text-text-main font-bold hover:bg-gray-100 transition-all text-center"
                        >
                            Pedir Orçamento Online
                        </Link>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Icon name="timer" className="text-primary" />
                        <span>Chegada rápida na região</span>
                    </div>
                </div>

                <div className="mt-6 bg-background-light p-6 rounded-[2rem] border border-border-color">
                    <h4 className="font-bold text-text-main mb-4">Outras Regiões</h4>
                    <ul className="space-y-3">
                        {neighborhoods.filter(n => n.id !== id).slice(0, 5).map(neighbor => (
                            <li key={neighbor.id}>
                                <Link to={`/bairro/${neighbor.id}`} className="flex items-center justify-between text-text-muted hover:text-primary transition-colors group">
                                    <span>{neighbor.name}</span>
                                    <Icon name="arrow_forward" className="text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </article>
  );
};

export default NeighborhoodDetail;