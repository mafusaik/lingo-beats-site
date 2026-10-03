import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { AppleLogo, GooglePlayLogo } from './StoreIcons';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-[450px] w-[500px] rounded-full bg-amber-500/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7">
            {/* Clean unboxed metadata text */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-amber-400">
              <span>Мобильное приложение</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Билингвальные аудиотреки</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Разработчик GlazerDev</span>
            </div>

            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl leading-[1.12]">
              Осваивайте английский на слух через билингвальные треки
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Слушайте живые диалоги и музыкальные истории с синхронным построчным переводом. Без утомительной зубрежки грамматики — только естественное погружение в контекст и интонацию.
            </p>

            {/* Store Download Badges / Placeholders with Apple and Google Play logos */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-400/20 transition-all duration-200 hover:bg-amber-300 active:scale-95"
              >
                <div className="flex items-center gap-1.5 shrink-0">
                  <AppleLogo className="h-4 w-4 text-slate-950" />
                  <GooglePlayLogo className="h-4 w-4" />
                </div>
                <span>Загрузить в App Store &amp; Google Play</span>
              </a>

              <a
                href="#player-features"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10"
              >
                <ArrowDown className="h-4 w-4" />
                <span>Возможности приложения</span>
              </a>
            </div>

            {/* Core facts row: updated levels A2–C1 */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-lg">
              <div>
                <p className="text-2xl font-bold tracking-tight text-white font-mono tabular-nums">100%</p>
                <p className="mt-1 text-xs text-slate-400">Синхронный перевод строка в строку</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white font-mono tabular-nums">0.5x–1.5x</p>
                <p className="mt-1 text-xs text-slate-400">Плавная регулировка скорости речи</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white font-mono tabular-nums">A2–C1</p>
                <p className="mt-1 text-xs text-slate-400">Уровни от базового (A2) до свободного (C1)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup showing exact app screenshot */}
          <div className="flex justify-center lg:col-span-5">
            <PhoneMockup type="player" />
          </div>

        </div>
      </div>
    </section>
  );
};
