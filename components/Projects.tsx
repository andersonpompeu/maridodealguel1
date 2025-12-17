import React from 'react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsE0zQ8fBPnPthP-iW4budmrGwPx_VhRsI02rERTlALY33Ko3BIyZ-8WWBhd2LQQlYcvGOZA1KWzeKv0hJ6j7Ozcah4DTkrxsqq18HP4jymapZnUguS8v3leQ8OcCL3ptIEbTGhW8mMdJtvhubKfO_ukscD1zCB0y277fFgLf6PdSen84ZhiO3NFZTTPrHA4on2mP_o3F8vQfowX90a1yall5PQhcVKJaFdU3mdY8TwQJ7hiVqiBrhRGHNSY0fKglK9SHBmbvKNPA',
    category: 'Elétrica',
    title: 'Instalação de Luminárias LED',
    location: 'Zona 3, Maringá'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMHUUA-Q47j_3WM3jPfZknepbUK_WeuO6utlxjYluXoa6S-DLGygJKngPxYDdYxfkysVAsHikvYux2r7RpF7F80XgAKYNfidIbq_DLUtm3_i2FO0ixWdm9afIFwdeiPW78m1g-uRvJAyKepSVoFStgdAktwrWG4PryzVMIieZUfmrbe8oSaeeNTuRR6-F7QzaSdoRbgEQimiUqaQhe-9kMsp5K3DIaynPPnnh-FhSJwuhlW5_JyTQO9MEC75A4zRb9v7M-1Gpoup4',
    category: 'Montagem',
    title: 'Montagem de Cozinha Planejada',
    location: 'Jardim Alvorada',
    spanRow: true
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3ClbmOjfJqUqiXdpi2-zsL7DV9_U8AXssQB46LVjeIN_Or8iTVWtMU3HQLDf-XhtoheNDvkh3UkuHRMj8ddqWqnMdSthSvMlqrmmwTMI-tUm3V2Xj_IVR-4APV-q-lkPujZq1b6jv0uD16cCo3zmLD-gQZaG1W4E7ic0YIBodYkyr5vsRg7Y09uIIdKjRTDjAW-0DDfcrui2jbwwY9VKOVB6iGX-ROC5XAH3lrJf3LTmQKOux1PAI9EemQDwDd1sJg8Wm7HH6F_8',
    category: 'Pintura',
    title: 'Renovação de Sala de Estar',
    location: 'Centro'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW0QL9McJm-yf_MZEbv1uCAjHqJ092VcHgquNSov54CCebPpbKMkRzviyjbtFXQrBwZzgLmtC2OavC5MK8wfeGSL0K2GCo_4Rn7jS74oYuG-X5GWxUl0wH5I43AN8hHNlhH8hw5WCmzDzhKzm8UsWHye5OKAofKP4ZcHN0ePRfzjLPt0wUOHjdt5jN_-egyz2tv10ALri9n4gpLUhb-nuQhd09DNMrDH7OSFwAzT3rd7yuB1rx69eWjV_Od46V3eb7RhuuNgHPQsE',
    category: 'Hidráulica',
    title: 'Reparo de Vazamento Oculto',
    location: 'Gleba Palhano'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtA0s96TMIoamneKlyW0FGHf8e9z5zMPJYtfoOzCQp9b9_P-9Jg3JHi1DwMqKuGZOndsPr_v-AEnsNbiRXDQZDnN6lgumn0nCf__HAXR49pA1Z6Phh9iRHVecKJyPRlA1HCWEJA3vmtjJM_I2QCbZxaMM3qD5YkWGBSEFQD25lojm2gmNbAA7rBCGgnaytwakVHOpgetVDQzYDMR4Ec2qqzWNpwltBAaFoQVj9V7HkVBFV6l6cVzoRv7sdMttXmvUbLu8RR_vR4RY',
    category: 'Reparos',
    title: 'Manutenção de Deck Externo',
    location: 'Zona 7'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Projetos Realizados</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Confira alguns dos nossos trabalhos recentes em Maringá. Qualidade e limpeza garantidas em cada serviço.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${project.spanRow ? 'lg:row-span-2 lg:h-full' : ''}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url("${project.image}")` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-3 py-1 bg-primary text-text-main text-xs font-bold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;