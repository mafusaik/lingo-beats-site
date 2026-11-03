import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import { AppleLogo, GooglePlayLogo } from './StoreIcons';
import { AppLogo } from './AppLogo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-[#0f2430] p-6 sm:p-8 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white"
          aria-label="Закрыть"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <AppLogo className="h-12 w-12" size={48} />
          <div>
            <h3 className="text-xl font-bold text-white">Lingo Beats</h3>
            <p className="text-xs text-amber-400 font-medium">Разработчик: GlazerDev</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-300">
          Приложение официально доступно для бесплатной загрузки на платформах iOS и Android:
        </p>

        {/* Store Links with official icons and direct URLs */}
        <div className="mt-6 space-y-3">
          <a
            href="https://apps.apple.com/app/lingo-beats/id6820147844"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-3.5 text-white transition-all hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 group"
          >
            <div className="flex items-center gap-3">
              <AppleLogo className="h-6 w-6 text-white group-hover:text-slate-950 shrink-0 transition-colors" />
              <div>
                <p className="text-[11px] uppercase font-semibold text-slate-400 group-hover:text-slate-800 leading-tight">Загрузите в</p>
                <p className="text-base font-bold leading-tight">App Store</p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-300 group-hover:text-slate-950">Скачать →</span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.glazer.learn.english.music.lingobeats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-3.5 text-white transition-all hover:bg-teal-400 hover:text-slate-950 hover:border-teal-400 group"
          >
            <div className="flex items-center gap-3">
              <GooglePlayLogo className="h-6 w-6 shrink-0" />
              <div>
                <p className="text-[11px] uppercase font-semibold text-slate-400 group-hover:text-slate-800 leading-tight">Доступно в</p>
                <p className="text-base font-bold leading-tight">Google Play</p>
              </div>
            </div>
            <span className="text-xs font-bold text-teal-300 group-hover:text-slate-950">Скачать →</span>
          </a>
        </div>

        {/* Features check list */}
        <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-teal-400 shrink-0" />
            <span>Офлайн-кеширование в обеих версиях</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-teal-400 shrink-0" />
            <span>Регулировка скорости от 0.5x до 1.5x</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-teal-400 shrink-0" />
            <span>Полное отсутствие рекламы</span>
          </div>
        </div>

      </div>
    </div>
  );
};
