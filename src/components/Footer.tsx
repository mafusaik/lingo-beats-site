import React from 'react';
import { getRoute } from '../utils/routes';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#081219] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Wordmark */}
          <div className="flex items-center gap-3">
            <img
              src="/logo_dark_512.png"
              alt="Lingo Beats"
              className="h-8 w-8 rounded-lg object-contain shadow-sm"
              referrerPolicy="no-referrer"
            />
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-bold tracking-tight text-white">
              Lingo Beats
            </span>
            <span className="text-xs text-slate-500 font-normal">by GlazerDev</span>
          </div>

          {/* Links to Separate Pages */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a
              href={getRoute('/')}
              className="text-slate-300 transition-colors hover:text-white"
            >
              Главная
            </a>
            <a
              href={getRoute('privacy')}
              className="text-slate-300 transition-colors hover:text-white"
            >
              Политика конфиденциальности
            </a>
            <a
              href={getRoute('terms')}
              className="text-slate-300 transition-colors hover:text-white"
            >
              Условия использования (EULA)
            </a>
            <a
              href={getRoute('support')}
              className="text-slate-300 transition-colors hover:text-white"
            >
              Служба поддержки
            </a>
          </nav>

          {/* Developer and Contact Info */}
          <div className="text-xs text-slate-500 text-center md:text-right">
            <span>Разработчик: GlazerDev</span>
            <span className="mx-2">·</span>
            <a href="mailto:glazer.dev@gmail.com" className="text-slate-400 hover:text-amber-400">
              glazer.dev@gmail.com
            </a>
          </div>

        </div>

        {/* Copyright notice strictly as instructed */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          © 2026 GlazerDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
