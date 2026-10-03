import React from 'react';
import { AppLogo } from './AppLogo';
import { useNavigation } from '../context/NavigationContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="border-t border-white/10 bg-[#081219] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Wordmark */}
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          >
            <AppLogo showWordmark className="h-8 w-8" wordmarkClassName="text-lg font-bold tracking-tight text-white" />
            <span className="text-xs text-slate-500 font-normal">by GlazerDev</span>
          </button>

          {/* Links to Separate Pages */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="text-slate-300 transition-colors hover:text-white cursor-pointer"
            >
              Главная
            </button>
            <button
              type="button"
              onClick={() => navigateTo('privacy')}
              className="text-slate-300 transition-colors hover:text-white cursor-pointer"
            >
              Политика конфиденциальности
            </button>
            <button
              type="button"
              onClick={() => navigateTo('terms')}
              className="text-slate-300 transition-colors hover:text-white cursor-pointer"
            >
              Условия использования (EULA)
            </button>
            <button
              type="button"
              onClick={() => navigateTo('support')}
              className="text-slate-300 transition-colors hover:text-white cursor-pointer"
            >
              Служба поддержки
            </button>
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
