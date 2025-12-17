import React from 'react';
import Icon from './Icon';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    question: "Quanto custa um marido de aluguel em Maringá?",
    answer: "Em Maringá, o valor médio de um marido de aluguel costuma ficar entre R$ 60 e R$ 110 por hora, variando conforme tipo de serviço, materiais e deslocamento. Para serviços fechados, é possível combinar um preço por pacote ou por visita, após avaliação."
  },
  {
    question: "Como funciona o orçamento?",
    answer: "Você envia fotos e uma descrição dos problemas pelo WhatsApp, informa o bairro e recebe uma estimativa de valor e horário disponível para visita. Em serviços mais complexos, é feita uma avaliação no local antes de fechar o preço final."
  },
  {
    question: "É seguro contratar um marido de aluguel?",
    answer: "Sim, desde que seja um profissional com referências, avaliações de outros clientes e identificação clara. Por isso, sempre são enviados nome, foto e contatos oficiais para sua segurança, além de avaliações reais de clientes de Maringá."
  },
  {
    question: "Atendem em horários de emergência?",
    answer: "Sim, dependendo da disponibilidade. Entre em contato pelo WhatsApp para verificar a possibilidade de atendimento imediato para urgências elétricas ou hidráulicas."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-text-main mb-8 text-center">Dúvidas sobre marido de aluguel em Maringá</h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-white border border-border-color rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h3 className="font-bold text-text-main">{faq.question}</h3>
              <Icon name="expand_more" className="transition duration-300 group-open:-rotate-180" />
            </summary>
            <p className="mt-4 text-text-muted text-sm leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;