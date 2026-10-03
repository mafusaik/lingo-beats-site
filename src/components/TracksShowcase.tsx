import React from 'react';
import { Layers, Sparkles, Check, RefreshCw, Volume2 } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

export const TracksShowcase: React.FC = () => {
  const levels = [
    {
      level: 'A2',
      title: 'Базовый уровень',
      focus: 'Бытовой контекст, распорядок дня, простые диалоги в магазинах и кафе. Помогает преодолеть языковой зажим.',
      topics: 'Знакомство · Покупки · Городская навигация · Утренние привычки',
    },
    {
      level: 'B1',
      title: 'Средний уровень',
      focus: 'Путешествия, обсуждение планов, решение нестандартных ситуаций и свободное понимание темпа разговорной речи.',
      topics: 'Планы на выходные · Отели и аэропорты · Работа и увлечения · Истории из жизни',
    },
    {
      level: 'B2',
      title: 'Выше среднего',
      focus: 'Богатая эмоциональная палитра, беглая связная речь, идиомы и фразовые глаголы в естественном ритме.',
      topics: 'Отношения · Музыкальные истории · Перемены в жизни · Социальные темы',
    },
    {
      level: 'C1',
      title: 'Продвинутый уровень',
      focus: 'Сложные абстрактные понятия, развернутая аргументация, академическая лексика и тонкие смысловые оттенки.',
      topics: 'Принятие решений · Философия · Профессиональные дискуссии · Культурный контекст',
    },
  ];

  return (
    <section id="tracks" className="py-20 border-t border-white/10 relative bg-[#0b171f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Conceptual levels breakdown & Regular Updates */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Layers className="h-4 w-4" />
              <span>Структура библиотеки</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Уровни A2–C1</span>
            </div>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Библиотека билингвальных аудиотреков
            </h2>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Контент Lingo Beats структурирован по международной шкале CEFR от базового уровня A2 до продвинутого C1. Вы можете плавно повышать сложность по мере привыкания к беглой английской речи.
            </p>

            {/* Regular Updates & Free Tier Highlights Banner */}
            <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-950/20 p-5">
              <div className="flex items-start gap-3">
                <RefreshCw className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <h3 className="font-bold text-white">
                    Каталог регулярно пополняется новыми треками
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Мы непрерывно записываем и добавляем новые истории, диалоги и аудиокомпозиции. В бесплатной версии доступно <strong>4 ознакомительных трека</strong> со всеми функциями плеера, а подписка Premium открывает всю постоянно растущую библиотеку.
                  </p>
                </div>
              </div>
            </div>

            {/* Level Cards */}
            <div className="mt-8 space-y-4">
              {levels.map((item) => (
                <div
                  key={item.level}
                  className="rounded-2xl border border-white/10 bg-[#132733]/50 p-5 transition-colors hover:border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="rounded-lg bg-amber-400 px-2.5 py-1 text-xs font-bold text-slate-950">
                        {item.level}
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                    {item.focus}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400">
                    <Volume2 className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                    <span>Темы: {item.topics}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Screenshot from the app via PhoneMockup with top padding */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <PhoneMockup type="tracks" />
            <p className="mt-4 text-center text-xs text-slate-400">
              Интерфейс библиотеки треков в приложении Lingo Beats
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
