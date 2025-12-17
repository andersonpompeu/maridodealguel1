import React, { useEffect, Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import NeighborhoodDetail from './components/NeighborhoodDetail';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import BackToTop from './components/BackToTop';
import Quiz from './components/Quiz';

// Scroll handler adaptado para HashRouter
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    // Em HashRouter, o hash da URL (ex: #/servicos) é gerenciado pelo router.
    // Para âncoras internas, precisamos de um pequeno delay para garantir que o DOM renderizou.
    const path = location.pathname;
    const hash = window.location.hash;
    
    // Se a URL contiver uma âncora após a rota (ex: #/#servicos)
    const anchorMatch = hash.match(/#([^/]+)$/);
    const anchor = anchorMatch ? anchorMatch[1] : null;

    if (anchor) {
      const element = document.getElementById(anchor);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [location]);

  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isQuiz = location.pathname.startsWith('/quiz');

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToHash />
      {!isQuiz && <Header />}
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Carregando Marido de Aluguel...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servico/:id" element={<ServiceDetail />} />
            <Route path="/bairro/:id" element={<NeighborhoodDetail />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      {!isQuiz && <Footer />}
      {!isQuiz && <FloatingButton />}
      {!isQuiz && <BackToTop />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;