import React from 'react';
import { CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { AppleLogo, GooglePlayLogo } from './StoreIcons';
import { AppLogo } from './AppLogo';

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 border-t border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0b171f] to-[#122834]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="flex justify-center">
          <AppLogo className="h-16 w-16" size={64} />
        </div>
        
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Скачайте Lingo Beats на свой смартфон
        </h2>
        
        <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
          Приложение официально опубликовано и готово к загрузке. Установите Lingo Beats бесплатно, слушайте 4 ознакомительных трека или оформите подписку Premium для доступа ко всей библиотеке уровней A1–C1.
        </p>

        {/* Store Links Cards with official logos and direct links */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-2xl mx-auto">
          
          {/* App Store Card */}
          <a
            href="https://apps.apple.com/app/lingo-beats/id6820147844"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 rounded-2xl border border-white/20 bg-white/5 p-5 text-left backdrop-blur-sm transition-all duration-200 hover:border-amber-400/60 hover:bg-white/10 hover:shadow-xl hover:shadow-amber-400/10 active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="rounded-xl bg-white/10 p-2.5 text-white flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <AppleLogo className="h-6 w-6 text-white group-hover:text-slate-950 transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Загрузка для iPhone</p>
                  <p className="text-xl font-bold text-white leading-tight flex items-center gap-1.5">
                    <span>App Store</span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                  </p>
                </div>
              </div>
              <span className="rounded-lg bg-amber-400/20 border border-amber-400/30 px-2.5 py-1 text-[11px] font-bold text-amber-300 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                Скачать
              </span>
            </div>
            <p className="mt-3.5 text-xs text-slate-400 leading-relaxed">
              Поддержка iPhone и iPad (iOS 15.0+). Бесплатная базовая версия и подписка через Apple ID.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-semibold">
              <span>Перейти в App Store</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Google Play Card */}
          <a
            href="https://play.google.com/store/apps/details?id=com.glazer.learn.english.music.lingobeats"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 rounded-2xl border border-white/20 bg-white/5 p-5 text-left backdrop-blur-sm transition-all duration-200 hover:border-teal-400/60 hover:bg-white/10 hover:shadow-xl hover:shadow-teal-400/10 active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="rounded-xl bg-white/10 p-2.5 flex items-center justify-center group-hover:bg-teal-400 group-hover:text-slate-950 transition-colors">
                  <GooglePlayLogo className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Загрузка для Android</p>
                  <p className="text-xl font-bold text-white leading-tight flex items-center gap-1.5">
                    <span>Google Play</span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-400 transition-colors" />
                  </p>
                </div>
              </div>
              <span className="rounded-lg bg-teal-400/20 border border-teal-400/30 px-2.5 py-1 text-[11px] font-bold text-teal-300 group-hover:bg-teal-400 group-hover:text-slate-950 transition-colors">
                Скачать
              </span>
            </div>
            <p className="mt-3.5 text-xs text-slate-400 leading-relaxed">
              Поддержка Android 8.0 и новее. Бесплатная базовая версия и управление через Google Play Billing.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-teal-400 font-semibold">
              <span>Перейти в Google Play</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

        </div>

        {/* Feature summary */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-teal-400" />
            <span>4 трека в базовой версии</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-teal-400" />
            <span>Офлайн-режим в обеих версиях</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-teal-400" />
            <span>Регулярное пополнение каталога</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-teal-400" />
            <span>Без рекламы в обеих версиях</span>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">
          Разработчик: GlazerDev · Служба поддержки: <a href="mailto:glazer.dev@gmail.com" className="text-slate-400 hover:text-amber-400">glazer.dev@gmail.com</a>
        </div>

      </div>
    </section>
  );
};
