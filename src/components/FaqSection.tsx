import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Бесплатно ли приложение Lingo Beats и что даёт подписка Premium?',
      a: 'Приложение можно скачать бесплатно: в базовой версии доступно 4 полноценных аудиотрека с доступом ко всем функциям плеера (синхронные субтитры, параллельный перевод, регулировка темпа). Ни в бесплатной, ни в платной версии нет никакой рекламы. Платная подписка Lingo Beats Premium открывает доступ ко всей библиотеке треков (уровни A2–C1), регулярным пополнениям новыми темами и возможности слушать любой трек каталога.',
    },
    {
      q: 'Можно ли слушать треки без подключения к интернету?',
      a: 'Да! Офлайн-воспроизведение доступно в обеих версиях приложения. Как только вы начинаете слушать трек, он автоматически кешируется на вашем устройстве, поэтому в следующий раз его можно слушать в дороге, в самолете или в метро даже без подключения к сети.',
    },
    {
      q: 'Пополняется ли библиотека новыми аудиотреками?',
      a: 'Да! Мы регулярно добавляем в каталог новые треки, охватывающие различные темы — от практических бытовых диалогов до глубоких историй и рассуждений. Все новые треки автоматически становятся доступны подписчикам Lingo Beats Premium без дополнительных оплат.',
    },
    {
      q: 'Как отменить подписку на iPhone (iOS) или Android?',
      a: 'Отменить подписку можно в любой момент не менее чем за 24 часа до окончания текущего расчетного периода. На iPhone: откройте Настройки устройства > нажмите на свое имя (Apple ID) > «Подписки» > выберите Lingo Beats > «Отменить подписку». На Android: откройте Google Play > профиль > «Платежи и подписки» > «Подписки» > Lingo Beats > «Отменить подписку».',
    },
    {
      q: 'Как работает параллельный синхронный перевод?',
      a: 'Диктор произносит предложения на английском языке, а на экране синхронно подсвечивается текущая строчка на русском и английском. Это развивает моментальное распознавание речи на слух без необходимости мысленно переводить каждое слово.',
    },
    {
      q: 'Как связаться с разработчиком и службой поддержки?',
      a: 'По любым вопросам вы можете написать напрямую разработчику GlazerDev по электронной почте: glazer.dev@gmail.com либо через страницу поддержки /support на этом сайте.',
    },
  ];

  return (
    <section id="faq" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span>Вопросы и ответы</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Часто задаваемые вопросы</span>
          </div>
          <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#132733]/50 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-amber-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-slate-300 border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
