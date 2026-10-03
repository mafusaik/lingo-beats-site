import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b171f]/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand title / wordmark */}
        <a href="/" className="group flex items-center gap-3">
          <img
            src="/logo_dark_512.png"
            alt="Lingo Beats Logo"
            className="h-9 w-9 rounded-lg object-contain shadow-sm transition-transform duration-200 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold tracking-tight text-white">
            Lingo Beats
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:underline underline-offset-8"
          >
            О приложении
          </a>
          <a
            href="#player-features"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:underline underline-offset-8"
          >
            Интерфейс
          </a>
          <a
            href="#tracks"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:underline underline-offset-8"
          >
            Каталог треков
          </a>
          <a
            href="#subscription"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:underline underline-offset-8"
          >
            Подписка
          </a>
          <a
            href="/support"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:underline underline-offset-8"
          >
            Поддержка
          </a>
        </nav>

        {/* Zone 3: Primary action link to download section */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#download"
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
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-400"
            >
              О приложении
            </a>
            <a
              href="#player-features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Интерфейс
            </a>
            <a
              href="#tracks"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Каталог треков
            </a>
            <a
              href="#subscription"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Подписка и тарифы
            </a>
            <a
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-400"
            >
              Служба поддержки
            </a>
            <div className="pt-2">
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
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
