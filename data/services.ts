import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: 'eletrica-residencial',
    icon: 'electric_bolt',
    title: 'Elétrica Residencial',
    description: 'Troca de chuveiro e resistência, instalação de tomadas e interruptores, troca de plafons, spots e lustres.',
    longDescription: 'A segurança elétrica da sua residência é nossa prioridade absoluta. Realizamos desde pequenos reparos, como troca de tomadas e interruptores, até manutenções mais complexas em quadros de distribuição. Utilizamos materiais de alta qualidade e seguimos as normas técnicas vigentes para garantir que sua instalação seja segura e eficiente.',
    features: ['Instalação de Chuveiros', 'Tomadas e Interruptores'],
    detailedFeatures: [
      'Troca de chuveiro e resistência',
      'Instalação de tomadas e interruptores',
      'Troca de plafons, spots e lustres',
      'Instalação de ventiladores de teto',
      'Reparos em curto-circuitos',
      'Manutenção preventiva elétrica'
    ],
    benefits: [
      'Segurança contra curtos e incêndios',
      'Economia na conta de luz',
      'Conformidade com normas técnicas',
      'Atendimento rápido para emergências'
    ]
  },
  {
    id: 'hidraulica',
    icon: 'plumbing',
    title: 'Hidráulica',
    description: 'Conserto de vazamentos simples, troca de sifão, válvula de descarga e desentupimentos simples em pias e ralos.',
    longDescription: 'Problemas hidráulicos podem causar grandes transtornos e desperdício de água. Nossa equipe é especializada em identificar e resolver vazamentos, entupimentos e problemas em metais sanitários com rapidez e limpeza. Realizamos reparos em torneiras, registros e descargas com defeito.',
    features: ['Conserto de Vazamentos', 'Desentupimentos Simples'],
    detailedFeatures: [
      'Conserto de vazamentos simples em torneiras e registros',
      'Troca de sifão e flexíveis',
      'Reparos em válvulas de descarga',
      'Desentupimentos simples em pias e ralos',
      'Eliminação de goteiras',
      'Instalação de acabamentos hidráulicos'
    ],
    benefits: [
      'Redução na conta de água',
      'Prevenção de infiltrações',
      'Serviço limpo e organizado',
      'Garantia no serviço executado'
    ]
  },
  {
    id: 'montagem-moveis',
    icon: 'chair',
    title: 'Instalações e Montagens',
    description: 'Montagem de móveis (guarda-roupas, racks), instalação de suportes de TV, quadros, espelhos, cortinas e persianas.',
    longDescription: 'Comprou móveis pela internet e precisa montar? Nós resolvemos. Realizamos a montagem profissional de guarda-roupas, armários, painéis de TV e muito mais. Também fazemos a instalação de suportes, cortinas, persianas e prateleiras com nivelamento perfeito e fixação segura.',
    features: ['Montagem de Móveis', 'Instalação de TV'],
    detailedFeatures: [
      'Montagem de móveis (guarda-roupas, racks, armários, prateleiras)',
      'Instalação de suportes de TV',
      'Instalação de quadros e espelhos',
      'Instalação de varais de teto e parede',
      'Instalação de cortinas e persianas',
      'Fixação de nichos'
    ],
    benefits: [
      'Montagem correta que aumenta a durabilidade',
      'Ferramentas adequadas para cada tipo de móvel',
      'Nivelamento e alinhamento perfeito',
      'Fixação segura na parede'
    ]
  },
  {
    id: 'pequenos-reparos',
    icon: 'construction',
    title: 'Reparos Gerais',
    description: 'Pequenas pinturas, ajustes em portas que arrastam, fechaduras e manutenção preventiva geral.',
    longDescription: 'O serviço de manutenção preventiva e reparos gerais é ideal para manter sua casa sempre em ordem. Realizamos pequenas pinturas, retoques, ajustes em portas, lubrificação de dobradiças e verificação geral de itens básicos para evitar problemas maiores no futuro.',
    features: ['Pequenas Pinturas', 'Ajustes de Portas'],
    detailedFeatures: [
      'Pequenas pinturas e retoques',
      'Ajustes em portas que arrastam',
      'Troca e ajuste de fechaduras e dobradiças',
      'Verificação geral de itens básicos',
      'Manutenção preventiva',
      'Pequenos consertos em alvenaria'
    ],
    benefits: [
      'Resolução de vários problemas em uma visita',
      'Ambientes mais agradáveis',
      'Aumento da vida útil dos itens do imóvel',
      'Prevenção de custos maiores futuros'
    ]
  },
];