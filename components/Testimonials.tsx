import React from 'react';
import Icon from './Icon';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    text: "Chamei para trocar o chuveiro e aproveitar para instalar o suporte da TV. Chegou no horário combinado, fez tudo rápido e ainda deixou o local limpo. Recomendo!",
    author: "Ana",
    location: "Zona 7",
    initials: "AN"
  },
  {
    text: "Precisava de vários pequenos reparos no meu apartamento antes de colocar para alugar. Em uma visita só, resolveu tudo com um preço justo.",
    author: "Carlos",
    location: "Jardim Alvorada",
    initials: "CA"
  },
  {
    text: "Atendimento excelente! Precisava montar uns móveis do escritório e foi tudo muito rápido e organizado. Profissional de confiança.",
    author: "Ricardo Mendes",
    location: "Centro",
    initials: "RM"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-text-main text-background-light">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Depoimentos de clientes de Maringá</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                   <Icon key={i} name="star" className="text-sm" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary text-text-main flex items-center justify-center font-bold">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.author}</h4>
                  <p className="text-xs text-gray-400">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;