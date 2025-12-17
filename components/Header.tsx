import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from './Icon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavigation = (e: React.MouseEvent, targetId: string) => {
    setIsMenuOpen(false);
    
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Atualiza a URL sem causar recarregamento para manter consistência
        window.history.pushState(null, '', `#/${targetId ? '#' + targetId : ''}`);
      }
    } else {
      // Se não estiver na home, navega para a home com a âncora
      navigate(`/#${targetId}`);
    }
  };

  const NavItem = ({ target, label }: { target: string, label: string }) => (
    <button 
      onClick={(e) => handleNavigation(e, target)}
      className="text-text-main hover:text-primary transition-colors text-[15px] font-semibold cursor-pointer relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
    >
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-color bg-background-light/95 backdrop-blur supports-[backdrop-filter]:bg-background-light/60">
      <div className="flex items-center justify-between px-6 py-4 lg:px-10 max-w-[1280px] mx-auto">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="flex items-center justify-center size-10 rounded-full bg-primary text-text-main group-hover:scale-110 transition-transform shadow-sm">
            <Icon name="handyman" className="text-[20px]" />
          </div>
          <h2 className="text-text-main text-lg font-black leading-tight tracking-tight hidden sm:block">
            Marido de Aluguel <span className="text-primary-dark">Maringá</span>
          </h2>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          <NavItem target="inicio" label="Início" />
          <NavItem target="servicos" label="Serviços" />
          <NavItem target="projetos" label="Projetos" />
          <NavItem target="faq" label="FAQ" />
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={(e) => handleNavigation(e, 'contato')}
            className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-primary hover:bg-[#e6e205] transition-all text-text-main text-sm font-bold shadow-md hover:shadow-lg active:scale-95"
          >
            <span className="flex items-center gap-2">
              <Icon name="call" className="text-[20px]" />
              <span className="hidden sm:inline">Ligar Agora</span>
              <span className="inline sm:hidden">Contato</span>
            </span>
          </button>
          
          <button 
            className="md:hidden p-2 text-text-main hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Icon name={isMenuOpen ? "close" : "menu"} className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`
        md:hidden fixed inset-x-0 bg-background-light border-b border-border-color shadow-2xl transition-all duration-300 ease-in-out overflow-hidden
        ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
      `}>
        <nav className="flex flex-col items-center py-10 gap-6">
          <button onClick={(e) => handleNavigation(e, 'inicio')} className="flex items-center gap-3 text-xl font-bold text-text-main hover:text-primary transition-colors">
            <Icon name="home" className="text-primary text-2xl" /> Início
          </button>
          <button onClick={(e) => handleNavigation(e, 'servicos')} className="flex items-center gap-3 text-xl font-bold text-text-main hover:text-primary transition-colors">
            <Icon name="construction" className="text-primary text-2xl" /> Serviços
          </button>
          <button onClick={(e) => handleNavigation(e, 'projetos')} className="flex items-center gap-3 text-xl font-bold text-text-main hover:text-primary transition-colors">
            <Icon name="imagesmode" className="text-primary text-2xl" /> Projetos
          </button>
          <button onClick={(e) => handleNavigation(e, 'faq')} className="flex items-center gap-3 text-xl font-bold text-text-main hover:text-primary transition-colors">
            <Icon name="help" className="text-primary text-2xl" /> FAQ
          </button>
          <div className="w-full px-10 mt-2">
            <button onClick={(e) => handleNavigation(e, 'contato')} className="w-full py-4 rounded-2xl bg-primary text-text-main font-black text-center block shadow-lg active:scale-95 transition-transform">
              SOLICITAR ORÇAMENTO
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;