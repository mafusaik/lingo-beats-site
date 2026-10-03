import React from 'react';
import { Headphones, Eye, Clock, Zap } from 'lucide-react';

export const Methodology: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Бимодальное восприятие: слух + зрение',
      description:
        'Когда вы одновременно слышите английскую речь и видите синхронный русский перевод строка в строку, мозг мгновенно связывает звуковой образ со смыслом. Это исключает этап внутреннего мучительного перевода.',
      icon: Eye,
    },
    {
      number: '02',
      title: 'Контекст вместо списков слов',
      description:
        'Изучение изолированных слов забывается через 48 часов. В Lingo Beats вся лексика подается в законченных предложениях, живых бытовых ситуациях и эмоциональных историях с естественными речевыми связками.',
      icon: Headphones,
    },
    {
      number: '03',
      title: 'Контроль темпа и повторение сложных фраз',
      description:
        'Быстрая речь носителей больше не барьер. Замедляйте воспроизведение до 0.75x или 0.5x, чтобы разобрать каждое слияние звуков, или ускоряйте до 1.25x для тренировки беглого восприятия на слух.',
      icon: Clock,
    },
    {
      number: '04',
      title: 'Слушание в фоне — где и когда удобно',
      description:
        'На пробежке, за рулем, в общественном транспорте или во время готовки. Приложение спроектировано так, чтобы вы могли учиться даже с выключенным экраном, ориентируясь на аудио-пары.',
      icon: Zap,
    },
  ];

  return (
    <section id="method" className="py-20 border-t border-white/10 bg-[#0c1a24]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span>Научный подход к обучению</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Методика Lingo Beats</span>
          </div>
          <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Почему билингвальные аудиотреки учат быстрее учебников
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Традиционные уроки заставляют думать о правилах. Lingo Beats тренирует слуховую кору мозга понимать смысл фраз автоматически — точно так же, как мы в детстве осваивали родную речь.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="relative rounded-2xl border border-white/10 bg-[#132733]/40 p-8 transition-colors hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-400">
                    {item.number}.
                  </span>
                  <div className="rounded-xl bg-white/5 p-2.5 text-slate-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
