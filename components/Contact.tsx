import React, { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';
import Icon from './Icon';

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const limited = numbers.substring(0, 11);
    if (limited.length > 10) return limited.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    if (limited.length > 5) return limited.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    if (limited.length > 2) return limited.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
    return limited.replace(/^(\d*)/, '($1');
  };

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name': return !value.trim() ? 'Nome é obrigatório.' : (value.trim().split(' ').length < 2 ? 'Digite seu nome completo.' : undefined);
      case 'phone': return value.replace(/\D/g, '').length < 10 ? 'Telefone inválido.' : undefined;
      case 'service': return (!value || value === '') ? 'Selecione um serviço.' : undefined;
      case 'message': return value.trim().length < 10 ? 'A mensagem deve ter pelo menos 10 caracteres.' : undefined;
      default: return undefined;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const finalValue = name === 'phone' ? formatPhone(value) : value;
    setFormData(prev => ({ ...prev, [name]: finalValue }));
    if (touched[name]) setErrors(prev => ({ ...prev, [name]: validateField(name as keyof FormData, finalValue) }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key as keyof FormData, formData[key as keyof FormData]);
      if (error) { newErrors[key as keyof FormErrors] = error; isValid = false; }
    });

    setErrors(newErrors);
    setTouched({ name: true, phone: true, service: true, message: true });

    if (isValid) {
      setStatus('submitting');
      try {
        // Rota mapeada no netlify.toml para a Edge Function
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) { 
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (err) {
        setStatus('error');
      }
    }
  };

  const getInputClasses = (fieldName: keyof FormData) => {
    const base = "w-full px-4 py-3 rounded-lg border outline-none bg-white transition-all duration-200";
    if (touched[fieldName]) {
      if (errors[fieldName]) return `${base} border-red-500 focus:ring-2 focus:ring-red-200`;
      if (formData[fieldName]) return `${base} border-green-500 focus:ring-2 focus:ring-green-200`;
    }
    return `${base} border-border-color focus:border-primary focus:ring-2 focus:ring-primary/50`;
  };

  return (
    <section id="contato" className="py-20 bg-background-light border-t border-border-color">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 bg-white rounded-[3rem] p-8 md:p-12 border border-border-color shadow-xl relative min-h-[600px] overflow-hidden">
          <div className="absolute -right-20 -top-20 size-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <span className="bg-primary/20 text-text-main px-3 py-1 rounded-full text-xs font-bold w-fit mb-4 uppercase">Netlify Edge Connected</span>
            <h2 className="text-4xl font-black text-text-main mb-4 leading-tight">Agende agora seu marido de aluguel em Maringá</h2>
            <p className="text-text-muted text-lg mb-8">Processamos sua solicitação via borda para garantir a resposta mais rápida em Maringá.</p>
            
            <div className="flex flex-col gap-6">
              <a href="https://wa.me/5544999999999" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="size-12 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="chat" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-main">WhatsApp</h3>
                  <p className="text-sm text-text-muted">(44) 99999-9999</p>
                </div>
              </a>
              <a href="mailto:contato@maridomaringa.com.br" className="flex items-center gap-4 group">
                <div className="size-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="mail" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-main">Email</h3>
                  <p className="text-sm text-text-muted">contato@maridomaringa.com.br</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-background-light p-6 md:p-8 rounded-[2rem] z-10 flex items-center justify-center">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center animate-fade-in py-12 px-4 bg-white rounded-[2rem] shadow-sm w-full">
                <div className="size-20 bg-primary rounded-full flex items-center justify-center mb-6 animate-bounce shadow-lg">
                  <Icon name="check" className="text-4xl text-text-main font-black" />
                </div>
                <h3 className="text-2xl font-black text-text-main mb-3">Solicitação Enviada!</h3>
                <p className="text-text-muted mb-8 text-lg">
                  Recebemos seu pedido via Edge. Entraremos em contato em instantes por telefone ou WhatsApp.
                </p>
                <button onClick={() => setStatus('idle')} className="px-8 py-3 rounded-full bg-text-main text-white font-bold hover:bg-gray-800 transition-colors">
                  Novo Orçamento
                </button>
              </div>
            ) : status === 'error' ? (
               <div className="flex flex-col items-center text-center animate-fade-in py-12 px-4 bg-white rounded-[2rem] shadow-sm w-full">
                <div className="size-20 bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Icon name="error" className="text-4xl text-white font-black" />
                </div>
                <h3 className="text-2xl font-black text-text-main mb-3">Ops! Algo deu errado.</h3>
                <p className="text-text-muted mb-8 text-lg">
                  Não foi possível enviar via borda. Tente novamente ou nos chame diretamente no WhatsApp.
                </p>
                <button onClick={() => setStatus('idle')} className="px-8 py-3 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 transition-colors">
                  Tentar Novamente
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block text-xs font-bold text-text-main mb-1 ml-1 uppercase">Nome Completo</label>
                  <input name="name" type="text" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('name')} placeholder="Seu nome" />
                  {touched.name && errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-main mb-1 ml-1 uppercase">Telefone</label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('phone')} placeholder="(44) 99999-9999" maxLength={15} />
                  {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-main mb-1 ml-1 uppercase">Serviço</label>
                  <select name="service" value={formData.service} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('service')}>
                    <option value="">Selecione...</option>
                    <option value="Elétrica">Elétrica</option>
                    <option value="Hidráulica">Hidráulica</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Montagem de Móveis">Montagem de Móveis</option>
                  </select>
                  {touched.service && errors.service && <p className="text-red-500 text-xs mt-1 ml-1">{errors.service}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-main mb-1 ml-1 uppercase">Mensagem</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('message')} placeholder="O que você precisa?" rows={3}></textarea>
                  {touched.message && errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
                </div>
                <button type="submit" disabled={status === 'submitting'} className={`mt-2 w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg transition-all ${status === 'submitting' ? 'bg-gray-300 text-gray-500 cursor-wait' : 'bg-primary text-text-main hover:bg-[#e6e205] hover:shadow-xl active:scale-95'}`}>
                  {status === 'submitting' ? 'Enviando...' : 'Pedir Orçamento'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;