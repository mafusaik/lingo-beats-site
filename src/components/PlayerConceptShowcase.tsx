import React from 'react';
import { AlignLeft, Sliders, ShieldCheck, DownloadCloud } from 'lucide-react';

export const PlayerConceptShowcase: React.FC = () => {
  const features = [
    {
      icon: AlignLeft,
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-400/10 border-amber-400/20',
      title: 'Параллельный текст в реальном времени',
      desc: 'Каждая фраза звучит на английском языке и синхронно подсвечивается на экране вместе с точным русским переводом. Глаза и уши работают согласованно.',
    },
    {
      icon: Sliders,
      iconColor: 'text-teal-400',
      iconBg: 'bg-teal-400/10 border-teal-400/20',
      title: 'Плавный контроль темпа (0.5x – 1.5x)',
      desc: 'Если диктор говорит слишком быстро, замедлите трек до 0.75x одним нажатием. Тональность голоса сохраняется естественной, без искажений.',
    },
    {
      icon: DownloadCloud,
      iconColor: 'text-sky-400',
      iconBg: 'bg-sky-400/10 border-sky-400/20',
      title: 'Офлайн-режим и фоновое воспроизведение',
      desc: 'Загружайте треки в память телефона и слушайте в дороге или во время тренировки. Плеер продолжает работать при заблокированном экране.',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-400/10 border-amber-400/20',
      title: 'Чистый интерфейс без рекламы',
      desc: 'В приложении нет навязчивых баннеров и всплывающей рекламы. Только качественный звук, синхронный текст и непрерывный прогресс.',
    },
  ];

  return (
    <section id="player-features" className="py-20 border-t border-white/10 relative bg-[#0b171f]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span>Интерфейс приложения</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Плеер аудиотреков</span>
          </div>

          <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Синхронный плеер для естественного понимания
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Интерфейс Lingo Beats разработан специально для непрерывного восприятия английской речи. Вам не нужно останавливать аудио, переключаться на словари или искать контекст.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-[#132733]/50 p-7 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-[#132733]/80 flex gap-5 items-start"
              >
                <div className={`rounded-2xl border p-3.5 ${feat.iconBg} ${feat.iconColor} shrink-0`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
