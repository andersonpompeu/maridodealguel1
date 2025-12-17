import React from 'react';
import Icon from './Icon';

const InfoBar: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-border-color py-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-background-light border border-border-color">
            <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-text-main">
              <Icon name="phone_in_talk" />
            </div>
            <div>
              <h3 className="font-bold text-text-main">Telefone / WhatsApp</h3>
              <p className="text-text-muted text-sm">(44) 99876-5432</p>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-background-light border border-border-color">
            <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-text-main">
              <Icon name="location_on" />
            </div>
            <div>
              <h3 className="font-bold text-text-main">Área de Atendimento</h3>
              <p className="text-text-muted text-sm">Maringá, Sarandi e Paiçandu</p>
            </div>
          </div>
          
          {/* Hours */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-background-light border border-border-color">
            <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-text-main">
              <Icon name="schedule" />
            </div>
            <div>
              <h3 className="font-bold text-text-main">Horário</h3>
              <p className="text-text-muted text-sm">Seg - Sex: 08h às 18h | Sáb: 08h às 12h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;