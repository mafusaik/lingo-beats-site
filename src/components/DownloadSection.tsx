import React from 'react';
import { CheckCircle } from 'lucide-react';
import { AppleLogo, GooglePlayLogo } from './StoreIcons';

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 border-t border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0b171f] to-[#122834]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <img
          src="/logo_dark_512.png"
          alt="Lingo Beats"
          className="mx-auto h-16 w-16 rounded-2xl shadow-xl border border-white/15"
          referrerPolicy="no-referrer"
        />
        
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Lingo Beats в магазинах приложений
        </h2>
        
        <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
          Приложение разрабатывается для платформ iOS и Android. После прохождения модерации ссылки для загрузки станут доступны ниже.
        </p>

        {/* Store Links Cards with official logos */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          
          {/* App Store Card */}
          <div className="w-full rounded-2xl border border-white/20 bg-white/5 p-4 text-left backdrop-blur-sm transition-colors hover:border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="rounded-xl bg-white/10 p-2.5 text-white flex items-center justify-center">
                  <AppleLogo className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Загрузка для iPhone</p>
                  <p className="text-lg font-bold text-white leading-tight">App Store</p>
                </div>
              </div>
              <span className="rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-amber-300">
                Скоро
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Поддержка iOS 15.0 и новее. Платные подписки управляются через Apple ID.
            </p>
          </div>

          {/* Google Play Card */}
          <div className="w-full rounded-2xl border border-white/20 bg-white/5 p-4 text-left backdrop-blur-sm transition-colors hover:border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="rounded-xl bg-white/10 p-2.5 flex items-center justify-center">
                  <GooglePlayLogo className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Загрузка для Android</p>
                  <p className="text-lg font-bold text-white leading-tight">Google Play</p>
                </div>
              </div>
              <span className="rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-amber-300">
                Скоро
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Поддержка Android 8.0 и новее. Оплата и подписки через Google Play Billing.
            </p>
          </div>

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
