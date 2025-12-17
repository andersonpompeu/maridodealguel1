import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative w-full">
      <div className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-gray-900"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBn8hq_YFHLLeke6LtPCX2fHSp0f-ugPEip1n9Uo7HRLXUBbKeorMjel_j3gGsq55oCl6FCcUqUpAZ_riHtDJvjRAy0HP-Tk_7rueRqnRr_OWpdLydj6V8Ek0QYQj55B3Se72gsV7AcKZGxU2hXj7pfGeumJ4vQbAeiYrciU4_GNj9plQvW6BAGnlmmWAjCfXZ9LGnZUqIE46GOEiaccu7ZrR1RQ5z1iAV0dUQkwVS_GaNmK1wEp6xLsq8wLcVl8nPlqpZScG5rB9k")`
          }}
          aria-label="Professional handyman fixing a light fixture in a modern home"
        />
        
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl px-4">
          <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-text-main uppercase tracking-wider">
            Atendimento em toda Maringá e Região
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
            Marido de Aluguel em Maringá – Reparos Rápidos, Com Segurança e Preço Justo
          </h1>
          <h2 className="text-gray-200 text-base md:text-lg font-normal max-w-2xl leading-relaxed drop-shadow-md">
            Precisa trocar um chuveiro, consertar uma torneira ou montar móveis em Maringá e não sabe por onde começar? Conte com um marido de aluguel de confiança para resolver vários serviços de uma só vez, com agilidade, cuidado e economia.
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <a 
              href="https://wa.me/5544999999999" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full h-12 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white text-base font-bold transition-transform hover:scale-105 shadow-lg cursor-pointer"
            >
              <Icon name="chat" className="mr-2" />
              Chamar no WhatsApp agora
            </a>
            <Link 
              to="/quiz" 
              className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-[#e6e205] text-text-main text-base font-bold transition-transform hover:scale-105 shadow-lg cursor-pointer"
            >
              <Icon name="bolt" className="mr-2" />
              Orçamento Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;