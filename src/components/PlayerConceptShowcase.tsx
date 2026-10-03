import React from 'react';
import { AlignLeft, Sliders, ShieldCheck, DownloadCloud } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

export const PlayerConceptShowcase: React.FC = () => {
  return (
    <section id="player-features" className="py-20 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Phone screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup type="player" />
          </div>

          {/* Right Column: Informative feature breakdown */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>Интерфейс приложения</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Плеер билингвальных аудиотреков</span>
            </div>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Синхронный плеер для естественного понимания
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Интерфейс Lingo Beats разработан специально для непрерывного восприятия английской речи. Вам не нужно останавливать аудио, переключаться на словари или искать контекст.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="rounded-xl bg-white/5 p-3 text-amber-400 shrink-0 h-fit">
                  <AlignLeft className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Параллельный текст в реальном времени</h3>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    Каждая фраза звучит на английском языке и синхронно подсвечивается на экране вместе с точным русским переводом. Глаза и уши работают согласованно.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white/5 p-3 text-teal-400 shrink-0 h-fit">
                  <Sliders className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Плавный контроль темпа (0.5x – 1.5x)</h3>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    Если диктор говорит слишком быстро, замедлите трек до 0.75x одним нажатием. Тональность голоса сохраняется естественной, без искажений.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white/5 p-3 text-sky-400 shrink-0 h-fit">
                  <DownloadCloud className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Офлайн-режим и фоновое воспроизведение</h3>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    Загружайте треки в память телефона и слушайте в дороге или во время тренировки. Плеер продолжает работать при заблокированном экране.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white/5 p-3 text-amber-400 shrink-0 h-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Чистый интерфейс без отвлекающих элементов</h3>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    В приложении нет навязчивых баннеров и всплывающей рекламы. Только качественный звук, текст и прогресс обучения.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
