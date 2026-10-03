import React, { useState } from 'react';
import { ArrowLeft, Mail, Send, CheckCircle2, MessageSquare, Copy, Check, HelpCircle, Smartphone, ExternalLink } from 'lucide-react';
import { Footer } from '../components/Footer';
import { getRoute } from '../utils/routes';

export const SupportPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('subscription');
  const [platform, setPlatform] = useState('ios');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; email: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('glazer.dev@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Пожалуйста, укажите ваше имя.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Пожалуйста, введите корректный адрес электронной почты.');
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      setErrorMsg('Пожалуйста, опишите ваш вопрос подробнее (не менее 10 символов).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `LB-2026-${randomTicketNum}`;
      setSubmittedTicket({ id: ticketId, email });
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0b171f] text-slate-100 flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-[#0b171f]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <a href={getRoute('/')} className="flex items-center gap-3 group">
              <img
                src="/logo_dark_512.png"
                alt="Lingo Beats"
                className="h-9 w-9 rounded-lg object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold tracking-tight text-white">
                Lingo Beats
              </span>
            </a>
            <span className="hidden sm:inline-block text-xs text-slate-500">/ Служба поддержки</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={getRoute('/')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>На главную</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-grow">
        
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <MessageSquare className="h-4 w-4" />
            <span>Центр помощи пользователям</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>GlazerDev</span>
          </div>

          <h1 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Служба поддержки Lingo Beats
          </h1>

          <p className="mt-3 text-base text-slate-300">
            Вопросы по подписке Lingo Beats Premium, отмене продления, техническим сбоям или предложения новых тем аудиотреков.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#132733]/50 p-6 sm:p-8 backdrop-blur-sm">
              
              {submittedTicket ? (
                <div className="text-center py-8 animate-in fade-in duration-300">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-400/20 text-teal-300">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">Обращение отправлено</h3>
                  <p className="mt-2 text-xs text-amber-400 font-mono font-semibold">
                    Идентификатор тикета: {submittedTicket.id}
                  </p>
                  <p className="mt-4 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Спасибо! Разработчик GlazerDev ответит на ваш адрес <strong className="text-white">{submittedTicket.email}</strong> в течение 12–24 часов.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmittedTicket(null);
                        setMessage('');
                      }}
                      className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      Отправить ещё одно сообщение
                    </button>
                    <a
                      href="/"
                      className="rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-semibold text-slate-950 hover:bg-amber-300 transition-colors"
                    >
                      На главную страницу
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-lg font-bold text-white mb-2">Форма связи с разработчиком</h2>

                  {errorMsg && (
                    <div className="rounded-xl border border-rose-500/30 bg-rose-950/40 p-3 text-xs text-rose-300">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Ваше имя <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Александр"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email для ответа <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="user@example.com"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Категория обращения
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#0c1f28] px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="subscription">Вопрос по подписке / оплате</option>
                        <option value="technical">Техническая ошибка в приложении</option>
                        <option value="audio">Качество звука или субтитры</option>
                        <option value="content">Предложение темы для трека</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Платформа устройства
                      </label>
                      <select
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#0c1f28] px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="ios">Apple iOS (iPhone)</option>
                        <option value="android">Android</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Описание ситуации <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Опишите вопрос, укажите модель телефона или пожелания к приложению..."
                      className="w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3.5 text-sm font-bold text-slate-950 shadow-md transition-all hover:bg-amber-300 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Отправка обращения...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Отправить запрос разработчику</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Contact & Cancellation Guides */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Box */}
            <div className="rounded-3xl border border-white/10 bg-[#132733]/50 p-6 backdrop-blur-sm">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400" />
                Прямой контакт разработчика
              </h3>
              
              <p className="mt-2 text-xs text-slate-300">
                Вы можете написать напрямую автору проекта на почту:
              </p>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 p-3">
                <span className="font-mono text-xs text-white">glazer.dev@gmail.com</span>
                <button
                  onClick={handleCopyEmail}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
                  title="Скопировать email"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-teal-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="mt-3">
                <a
                  href="mailto:glazer.dev@gmail.com?subject=Lingo%20Beats%20Support"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline"
                >
                  <span>Открыть в почтовом клиенте</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="mt-4 text-[11px] text-slate-400 space-y-1">
                <p>• Разработчик: GlazerDev</p>
                <p>• Время ответа: в течение 12–24 часов</p>
                <p>• Язык общения: русский / английский</p>
              </div>
            </div>

            {/* Instruction: How to Cancel Subscriptions */}
            <div className="rounded-3xl border border-white/10 bg-[#132733]/50 p-6 backdrop-blur-sm">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-teal-400" />
                Как отменить или изменить подписку
              </h3>

              <div className="mt-4 space-y-4 text-xs text-slate-300">
                <div className="rounded-xl border border-white/5 bg-slate-950/40 p-3">
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <Smartphone className="h-3.5 w-3.5 text-amber-400" />
                    На устройствах Apple (iOS):
                  </h4>
                  <p className="mt-1 text-slate-300 leading-relaxed">
                    1. Откройте приложение <strong>«Настройки»</strong> на iPhone.<br />
                    2. Нажмите на ваше имя в самом верху (учетная запись Apple ID).<br />
                    3. Выберите раздел <strong>«Подписки»</strong>.<br />
                    4. Найдите <strong>Lingo Beats</strong> и нажмите <strong>«Отменить подписку»</strong>.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-slate-950/40 p-3">
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <Smartphone className="h-3.5 w-3.5 text-teal-400" />
                    На устройствах Android:
                  </h4>
                  <p className="mt-1 text-slate-300 leading-relaxed">
                    1. Откройте приложение <strong>Google Play</strong>.<br />
                    2. Нажмите на значок профиля в правом верхнем углу.<br />
                    3. Перейдите в <strong>«Платежи и подписки»</strong> &gt; <strong>«Подписки»</strong>.<br />
                    4. Выберите <strong>Lingo Beats</strong> и нажмите <strong>«Отменить подписку»</strong>.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};
