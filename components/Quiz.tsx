import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual tipo de serviço você precisa?",
    options: ["Elétrica", "Hidráulica", "Pintura", "Montagem de Móveis", "Pequenos Reparos"]
  },
  {
    id: 2,
    question: "Qual o tipo do imóvel?",
    options: ["Casa", "Apartamento", "Comércio / Escritório", "Condomínio"]
  },
  {
    id: 3,
    question: "Qual a urgência do serviço?",
    options: ["Emergência (Hoje)", "Urgente (Amanhã)", "Próximos Dias", "Planejado / Sem pressa"]
  },
  {
    id: 4,
    question: "Qual o melhor período para agendamento?",
    options: ["Manhã (08:00 - 12:00)", "Tarde (13:00 - 18:00)", "Sábado de Manhã", "Horário Flexível"]
  }
];

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    address: '',
    neighborhood: '',
    city: '',
    phone: ''
  });

  const isFormStep = currentStep === questions.length;
  
  // Progress calculation: questions + 1 form step
  const totalSteps = questions.length + 1;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (isFormStep) {
      finishQuiz(answers, personalInfo);
    } else {
      if (selectedOption) {
        const newAnswers = { ...answers, [questions[currentStep].id]: selectedOption };
        setAnswers(newAnswers);
        
        // Se a opção selecionada for a primeira (Opção A), pula direto para o formulário
        if (selectedOption === questions[currentStep].options[0]) {
          setCurrentStep(questions.length);
        } else {
          setCurrentStep(currentStep + 1);
        }
        
        setSelectedOption(null);
      }
    }
  };

  const finishQuiz = (finalAnswers: Record<number, string>, info: typeof personalInfo) => {
    const message = `Olá! Respondi o questionário no site e gostaria de um orçamento:

👤 *Dados do Cliente:*
Nome: ${info.name}
Telefone: ${info.phone}
Endereço: ${info.address}
Bairro: ${info.neighborhood}
Cidade: ${info.city}

📋 *Detalhes do Serviço:*
🛠 Serviço: ${finalAnswers[1] || 'Não especificado'}
🏠 Imóvel: ${finalAnswers[2] || 'Não especificado'}
🚨 Urgência: ${finalAnswers[3] || 'Não especificado'}
📅 Período: ${finalAnswers[4] || 'Não especificado'}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "5544998765432";
    
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, '_blank');
    navigate('/');
  };

  const handleBack = () => {
    if (currentStep > 0) {
      // Se voltarmos do formulário, voltamos para a última questão respondida
      if (isFormStep) {
        setCurrentStep(questions.length - 1);
      } else {
        setCurrentStep(currentStep - 1);
      }
      setSelectedOption(null); 
    } else {
      navigate('/');
    }
  };

  const isFormValid = () => {
    return personalInfo.name && personalInfo.phone && personalInfo.address && personalInfo.neighborhood && personalInfo.city;
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-4 font-display">
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden relative">
        
        {/* Header / Progress */}
        <div className="bg-white p-6 pb-2">
           <div className="flex items-center justify-between mb-4">
             <button onClick={handleBack} className="text-gray-400 hover:text-gray-600 transition-colors">
               <Icon name="arrow_back" />
             </button>
             <div className="flex items-center gap-1 text-orange-500 font-bold bg-orange-50 px-3 py-1 rounded-full text-xs">
               <Icon name="schedule" className="text-sm" />
               <span>Rápido</span>
             </div>
           </div>

           {/* Progress Bar */}
           <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
           </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-2">
          {!isFormStep ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                <span className="text-orange-500">Questão {currentStep + 1}</span>
                <span className="text-gray-300 text-lg font-medium">/{questions.length}</span>
              </h2>
              
              <p className="text-gray-600 text-lg font-medium mb-8 leading-relaxed">
                {questions[currentStep].question}
              </p>

              <div className="space-y-4 mb-8">
                {questions[currentStep].options.map((option, index) => {
                  const isSelected = selectedOption === option;
                  const letters = ["A", "B", "C", "D", "E", "F"];
                  
                  return (
                    <div 
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className={`
                        relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group
                        ${isSelected 
                          ? 'border-[#4ADE80] bg-[#4ADE80]/10 shadow-sm' 
                          : 'border-gray-100 hover:border-gray-200 bg-white hover:bg-gray-50'
                        }
                      `}
                    >
                      <span className={`
                        font-bold mr-4 text-sm w-6
                        ${isSelected ? 'text-[#4ADE80]' : 'text-gray-400'}
                      `}>
                        {letters[index]}.
                      </span>
                      
                      <span className={`
                        font-medium text-base flex-grow
                        ${isSelected ? 'text-gray-800' : 'text-gray-500'}
                      `}>
                        {option}
                      </span>

                      <div className={`
                        size-6 rounded-full border-2 flex items-center justify-center transition-colors
                        ${isSelected ? 'border-[#4ADE80] bg-[#4ADE80] text-white' : 'border-gray-200 text-transparent'}
                      `}>
                        <Icon name="check" className="text-sm font-bold" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                <span className="text-orange-500">Seus Dados</span>
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Preencha seus dados para finalizarmos o orçamento via WhatsApp.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={personalInfo.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full p-4 rounded-lg border-2 border-gray-100 focus:border-orange-500 outline-none bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handleInputChange}
                    placeholder="(44) 99999-9999"
                    className="w-full p-4 rounded-lg border-2 border-gray-100 focus:border-orange-500 outline-none bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Endereço Completo</label>
                  <input 
                    type="text" 
                    name="address"
                    value={personalInfo.address}
                    onChange={handleInputChange}
                    placeholder="Rua, Número"
                    className="w-full p-4 rounded-lg border-2 border-gray-100 focus:border-orange-500 outline-none bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Bairro</label>
                    <input 
                      type="text" 
                      name="neighborhood"
                      value={personalInfo.neighborhood}
                      onChange={handleInputChange}
                      placeholder="Bairro"
                      className="w-full p-4 rounded-lg border-2 border-gray-100 focus:border-orange-500 outline-none bg-gray-50 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Cidade</label>
                    <input 
                      type="text" 
                      name="city"
                      value={personalInfo.city}
                      onChange={handleInputChange}
                      placeholder="Cidade"
                      className="w-full p-4 rounded-lg border-2 border-gray-100 focus:border-orange-500 outline-none bg-gray-50 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <button
            onClick={handleNext}
            disabled={isFormStep ? !isFormValid() : !selectedOption}
            className={`
              w-full py-4 rounded-xl font-bold text-lg tracking-wide shadow-lg transition-all duration-300
              ${(isFormStep ? isFormValid() : selectedOption)
                ? 'bg-orange-500 hover:bg-orange-600 text-white translate-y-0' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {isFormStep ? 'ENVIAR PEDIDO' : 'PRÓXIMO'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;