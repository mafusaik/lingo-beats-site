import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { AppLogo } from './AppLogo';
import { useNavigation } from '../context/NavigationContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo } = useNavigation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b171f]/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand title / wordmark */}
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <AppLogo showWordmark className="h-9 w-9 transition-transform duration-200 group-hover:scale-105" />
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            onClick={(e) => {
              // If not on home, go to home first then scroll to section
              navigateTo('home');
            }}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:underline underline-offset-8"
          >
            О приложении
          </a>
          <a
            href="#player-features"
            onClick={(e) => {
              navigateTo('home');
            }}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:underline underline-offset-8"
          >
            Интерфейс
          </a>
          <a
            href="#tracks"
            onClick={(e) => {
              navigateTo('home');
            }}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:underline underline-offset-8"
          >
            Каталог треков
          </a>
          <a
            href="#subscription"
            onClick={(e) => {
              navigateTo('home');
            }}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:underline underline-offset-8"
          >
            Подписка
          </a>
          <button
            type="button"
            onClick={() => navigateTo('support')}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-amber-400 hover:underline underline-offset-8 cursor-pointer"
          >
            Поддержка
          </button>
        </nav>

        {/* Zone 3: Primary action link to download section */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#download"
            onClick={() => navigateTo('home')}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 shadow-sm transition-all duration-200 hover:bg-amber-300 active:scale-95"
          >
            <Download className="h-4 w-4" />
            <span>Магазины приложений</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white focus:outline-none"
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#0b171f] px-4 pt-3 pb-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              onClick={() => {
                navigateTo('home');
                setMobileMenuOpen(false);
              }}
              className="text-base font-medium text-slate-200 hover:text-amber-400"
            >
              О приложении
            </a>
            <a
              href="#player-features"
              onClick={() => {
                navigateTo('home');
                setMobileMenuOpen(false);
              }}
              className="text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Интерфейс
            </a>
            <a
              href="#tracks"
              onClick={() => {
                navigateTo('home');
                setMobileMenuOpen(false);
              }}
              className="text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Каталог треков
            </a>
            <a
              href="#subscription"
              onClick={() => {
                navigateTo('home');
                setMobileMenuOpen(false);
              }}
              className="text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Подписка и тарифы
            </a>
            <button
              type="button"
              onClick={() => {
                navigateTo('support');
                setMobileMenuOpen(false);
              }}
              className="text-left text-base font-medium text-slate-200 hover:text-amber-400 cursor-pointer"
            >
              Служба поддержки
            </button>
            <div className="pt-2">
              <a
                href="#download"
                onClick={() => {
                  navigateTo('home');
                  setMobileMenuOpen(false);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-300"
              >
                <Download className="h-4 w-4" />
                <span>Загрузить для iOS &amp; Android</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
