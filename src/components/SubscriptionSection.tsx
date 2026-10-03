import React from 'react';
import { Check, RefreshCw } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const SubscriptionSection: React.FC = () => {
  const { navigateTo } = useNavigation();
  return (
    <section id="subscription" className="py-20 border-t border-white/10 bg-[#0c1a24]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span>Тарифные планы</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Честные условия</span>
          </div>
          <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Прозрачные варианты использования
          </h2>
          <p className="mt-4 text-base text-slate-300">
            В Lingo Beats принципиально нет рекламы ни в одном из тарифов. Опробуйте метод на 4 бесплатных треках с полным функционалом плеера или оформите Premium для доступа ко всей постоянно растущей библиотеке.
          </p>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          
          {/* Free Tier */}
          <div className="rounded-3xl border border-white/10 bg-[#132733]/40 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Базовый доступ</h3>
                <span className="text-xs font-semibold text-teal-400">Бесплатно</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Полноценное знакомство с методом билингвального прослушивания
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-3xl font-extrabold text-white">0 ₽</p>
                <p className="text-xs text-slate-400 mt-1">Без ограничений по сроку действия</p>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">4 ознакомительных аудиотрека</strong> разных уровней сложности
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Офлайн-воспроизведение:</strong> трек кешируется при первом прослушивании и доступен без сети
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Все функции плеера доступны:</strong> параллельный перевод строка в строку и синхронные караоке-субтитры
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Регулировка темпа речи</strong> от 0.5x до 1.5x без искажения голоса
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-teal-300">Полное отсутствие рекламы:</strong> учитесь без баннеров и прерываний
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <span className="block text-center text-xs text-slate-400 font-medium">
                Доступно сразу после установки приложения
              </span>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="rounded-3xl border-2 border-amber-400/50 bg-[#163342]/70 p-8 flex flex-col justify-between relative shadow-xl shadow-amber-400/5">
            <div className="absolute -top-3 right-6 rounded-full bg-amber-400 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-950">
              Вся библиотека
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Lingo Beats Premium</h3>
                <span className="text-xs font-semibold text-amber-400">Автопродление</span>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Неограниченный доступ ко всему текущему и будущему каталогу
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-slate-300">
                  Ежемесячная или годовая подписка
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Актуальная стоимость в вашей валюте отображается в приложении перед подтверждением оплаты
                </p>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Полный доступ ко всей библиотеке</strong> треков уровней A2, B1, B2, C1
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-amber-300">Регулярное добавление новых треков</strong> и тематических историй
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Офлайн-режим:</strong> автокеширование любого трека каталога для прослушивания без сети
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Все функции плеера</strong> и расширенный контроль темпа речи (0.5x–1.5x)
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Никакой рекламы</strong> ни при каких условиях
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-center">
              <span className="block text-xs text-amber-300 font-medium">
                Оформление внутри приложения через Apple ID / Google Play
              </span>
            </div>
          </div>

        </div>

        {/* App Store Guidelines Disclosure Box */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 max-w-4xl mx-auto text-xs text-slate-300 leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-white text-sm mb-2">
            <RefreshCw className="h-4 w-4 text-amber-400" />
            <span>Условия автоматического продления подписки:</span>
          </div>
          <ul className="space-y-1.5 pl-4 list-disc text-slate-300">
            <li>
              <strong>Списание средств:</strong> Оплата взимается с учетной записи Apple ID или Google Play при подтверждении покупки.
            </li>
            <li>
              <strong>Автоматическое продление:</strong> Подписка продлевается автоматически, если автопродление не отключено пользователем как минимум за 24 часа до окончания текущего расчетного периода.
            </li>
            <li>
              <strong>Стоимость продления:</strong> Плата за продление списывается со счета в течение 24 часов до окончания текущего периода по стоимости выбранного тарифного плана.
            </li>
            <li>
              <strong>Управление и отмена:</strong> Пользователь может самостоятельно управлять подпиской и отключить автопродление в любой момент после покупки в Настройках учетной записи Apple ID или в аккаунте Google Play.
            </li>
            <li>
              <strong>Бесплатный пробный период:</strong> Неиспользованная часть бесплатного пробного периода, если он предлагается, аннулируется при оформлении платной подписки.
            </li>
          </ul>

          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-slate-400">
            <span>
              Пользовательское соглашение и EULA:{' '}
              <button
                type="button"
                onClick={() => navigateTo('terms')}
                className="text-amber-400 hover:underline cursor-pointer"
              >
                Условия использования (/terms)
              </button>
            </span>
            <span>
              Защита данных:{' '}
              <button
                type="button"
                onClick={() => navigateTo('privacy')}
                className="text-amber-400 hover:underline cursor-pointer"
              >
                Политика конфиденциальности (/privacy)
              </button>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
