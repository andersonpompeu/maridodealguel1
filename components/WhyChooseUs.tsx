import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { neighborhoods } from '../data/neighborhoods';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-text-main mb-6">Por que escolher este marido de aluguel em Maringá?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 size-12 rounded-full bg-white border border-border-color flex items-center justify-center text-primary">
                <Icon name="verified_user" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-main">Profissional Especializado</h3>
                <p className="text-text-muted">Profissional especializado em manutenção residencial, com experiência comprovada em elétrica, hidráulica e montagens.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="shrink-0 size-12 rounded-full bg-white border border-border-color flex items-center justify-center text-primary">
                <Icon name="schedule" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-main">Pontualidade e Limpeza</h3>
                <p className="text-text-muted">Atendimento pontual, serviço limpo e organizado, explicando tudo o que será feito antes de começar.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="shrink-0 size-12 rounded-full bg-white border border-border-color flex items-center justify-center text-primary">
                <Icon name="savings" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-main">Orçamento Transparente</h3>
                <p className="text-text-muted">Opção de pagamento via PIX, cartão ou dinheiro, com nota/recibo. Soluções que evitam trocas desnecessárias para reduzir custos.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 bg-background-light border border-border-color rounded-[2rem] p-8">
          <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
            <Icon name="map" className="text-primary" />
            Atendimentos em Maringá e região
          </h3>
          <p className="text-text-muted mb-6">
            Atendimento em toda Maringá, incluindo zonas Norte, Sul, Leste e Oeste, além de bairros como Centro, Zona 7, Jardim Alvorada, Parque Avenida, Jardim Aclimação e Vila Morangueira.
            Também atendemos condomínios residenciais e cidades próximas (consulte disponibilidade).
          </p>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((neighborhood) => (
              <Link 
                to={`/bairro/${neighborhood.id}`}
                key={neighborhood.id} 
                className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-border-color hover:border-primary hover:bg-primary hover:text-text-main transition-colors cursor-pointer"
              >
                {neighborhood.name}
              </Link>
            ))}
            <span className="px-4 py-2 bg-transparent rounded-full text-sm font-medium text-text-muted border border-transparent italic">
              + Região Metropolitana
            </span>
          </div>
          <div className="mt-8 h-48 w-full rounded-xl bg-gray-200 overflow-hidden relative group cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz23Mcb-CoqT-042-AcnqnFmuNOItpLrMKHaMXImGZgD4aHppiszIBh-dBSmKeNaq3kEMxUqGYUdV8mUm2AkyIf_zzvR43imT9_ts6m-PSsDOteYQ3KLKsQHpp7-hY15BpY2v048_syQaDAkVudMtN9IACzjTL7bA67wY5Ihsh2-MfoXysqbIANqbNU99EJCR458KF8KqBmb1BbG91m_D6J33bRNlEYh5OVoQ54_57fCHOdTEB0kTk1ISeLtq6F8HJPKFp2tkS8Y0" 
              alt="Map of Maringá showing service zones" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button className="bg-primary text-text-main px-4 py-2 rounded-full font-bold shadow-lg text-sm transform group-hover:scale-110 transition-transform">
                Ver Área de Cobertura
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;