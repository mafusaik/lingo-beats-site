import React from 'react';
import { ArrowLeft, Scale, ShieldCheck, RefreshCw, Smartphone } from 'lucide-react';
import { Footer } from '../components/Footer';
import { getRoute } from '../utils/routes';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b171f] text-slate-100 flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-[#0b171f]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <a href={getRoute('/')} className="flex items-center gap-3 group">
              <img
                src="/logo_dark_512.png"
                alt="Lingo Beats"
                className="h-9 w-9 rounded-lg object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold tracking-tight text-white">
                Lingo Beats
              </span>
            </a>
            <span className="hidden sm:inline-block text-xs text-slate-500">/ Условия использования (EULA)</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={getRoute('/')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>На главную</span>
            </a>
            <a
              href={getRoute('support')}
              className="hidden sm:inline-flex rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/5"
            >
              Поддержка
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-grow">
        
        {/* Document Header */}
        <div className="border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Scale className="h-4 w-4" />
            <span>Лицензионное соглашение конечного пользователя (EULA)</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>GlazerDev</span>
          </div>

          <h1 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Пользовательское соглашение и условия подписки
          </h1>
          
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Приложение: Lingo Beats</span>
            <span aria-hidden="true">·</span>
            <span>Разработчик: GlazerDev</span>
            <span aria-hidden="true">·</span>
            <span>Дата последнего обновления: 1 января 2026 г.</span>
          </div>
        </div>

        {/* Detailed Legal Sections */}
        <div className="mt-8 space-y-10 text-sm leading-relaxed text-slate-300">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Общие положения и принятие условий</h2>
            <p>
              Настоящее Пользовательское соглашение (Лицензионное соглашение с конечным пользователем / EULA) представляет собой юридически обязывающий договор между физическим лицом (далее — «Пользователь») и разработчиком GlazerDev (далее — «Разработчик»), определяющий порядок и условия использования мобильного приложения «Lingo Beats» для платформ iOS и Android (далее — «Приложение»).
            </p>
            <p className="mt-2">
              Загружая, устанавливая или запуская Приложение, Пользователь подтверждает, что ознакомился, понял и безоговорочно принимает все условия настоящего Соглашения и Политики конфиденциальности. В случае несогласия с любым из условий, использование Приложения должно быть немедленно прекращено.
            </p>
          </section>

          {/* Section 2: Paid Auto-Renewable Subscriptions (App Store Guideline 3.1.2 Compliance) */}
          <section className="rounded-2xl border-2 border-amber-400/30 bg-amber-950/10 p-6">
            <h2 className="text-xl font-bold text-amber-300 mb-3 flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-amber-400" />
              2. Платные подписки и правила автоматического продления (Auto-Renewable Subscriptions)
            </h2>
            <p>
              В Приложении Lingo Beats базовый доступ включает в себя 4 полноценных ознакомительных аудиотрека со всеми доступными функциями плеера (синхронные субтитры, параллельный перевод, управление темпом речи) и полным отсутствием рекламы. Для получения неограниченного доступа ко всем существующим и регулярно добавляемым в каталог аудиотрекам (уровни сложности от A2 до C1), а также возможности офлайн-скачивания предусмотрена платная автовозобновляемая подписка <strong>«Lingo Beats Premium»</strong>. Ни в бесплатной версии, ни в платной подписке реклама не отображается.
            </p>

            <div className="mt-4 space-y-3 pl-2">
              <div>
                <h3 className="font-bold text-white">2.1. Доступные планы и расчетный период:</h3>
                <p className="mt-1">
                  Подписка «Lingo Beats Premium» может предлагаться на условиях <strong>ежемесячного</strong> (1 месяц) либо <strong>годового</strong> (1 год) расчетного периода. Актуальная цена и валюта оплаты отображаются на экране оформления подписки в Приложении перед подтверждением транзакции.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white">2.2. Списание средств и платежи:</h3>
                <p className="mt-1">
                  Оплата списывается с учетной записи Apple ID (для пользователей устройств Apple на базе iOS) или с аккаунта Google Play (для пользователей Android) в момент подтверждения покупки.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white">2.3. Автоматическое продление (Auto-Renewal):</h3>
                <p className="mt-1">
                  Подписка <strong>продлевается автоматически</strong> на тот же период, если автопродление не было отключено пользователем не менее чем за <strong>24 часа до окончания текущего расчетного периода</strong>.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white">2.4. Стоимость и срок списания за продление:</h3>
                <p className="mt-1">
                  Плата за продление подписки списывается со счета учетной записи в течение <strong>24 часов до окончания текущего расчетного периода</strong> по стандартной стоимости выбранного тарифа.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white">2.5. Управление подпиской и отмена:</h3>
                <p className="mt-1">
                  Пользователь может в любое время управлять оформленной подпиской и отключить её автоматическое продление в настройках своей учетной записи:
                </p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-300">
                  <li>
                    <strong className="text-white">Для устройств Apple (iOS):</strong> откройте системные «Настройки» &gt; нажмите на имя вашей учетной записи (Apple ID) &gt; «Подписки» &gt; выберите «Lingo Beats» &gt; нажмите «Отменить подписку».
                  </li>
                  <li>
                    <strong className="text-white">Для устройств Android:</strong> откройте приложение «Google Play» &gt; коснитесь значка профиля в правом верхнем углу &gt; «Платежи и подписки» &gt; «Подписки» &gt; выберите «Lingo Beats» &gt; нажмите «Отменить подписку».
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white">2.6. Бесплатный пробный период (Free Trial):</h3>
                <p className="mt-1">
                  Если Разработчиком предлагается бесплатный ознакомительный период (пробный период), любая его неиспользованная часть аннулируется в момент приобретения платной подписки на Приложение Пользователем.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white">2.7. Восстановление покупок (Restore Purchases):</h3>
                <p className="mt-1">
                  При переустановке Приложения или смене мобильного устройства Пользователь может восстановить ранее приобретенную активную подписку с помощью кнопки «Восстановить покупки» («Restore Purchases») в меню настроек Приложения.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Интеллектуальная собственность</h2>
            <p>
              Все права на интеллектуальную собственность в отношении Приложения «Lingo Beats», включая аудиотреки, оригинальные тексты, синхронизированные переводы, графические элементы, дизайн и логотип «Lingo Beats», принадлежат исключительно разработчику GlazerDev.
            </p>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300">
              <p className="font-semibold text-white flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                Официальное уведомление об авторских правах:
              </p>
              <p className="mt-1 text-xs font-mono text-amber-300">
                © 2026 GlazerDev. All rights reserved.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Предоставление лицензии и ограничения</h2>
            <p>
              Разработчик предоставляет Пользователю персональную, неисключительную, непередаваемую лицензию на использование Приложения в личных некоммерческих целях.
            </p>
            <p className="mt-2">Пользователю запрещается:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Копировать, декомпилировать, дизассемблировать программный код или извлекать медиафайлы приложения.</li>
              <li>Использовать аудиоматериалы Lingo Beats в публичных, коммерческих или рекламных целях без предварительного письменного согласия GlazerDev.</li>
              <li>Обходить технические средства защиты контента или механизмы авторизации покупок магазинов приложений.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Отказ от гарантий и ограничение ответственности</h2>
            <p>
              Приложение предоставляется по принципу «КАК ЕСТЬ» («AS IS»). Разработчик не гарантирует абсолютную безошибочность или бесперебойность работы Приложения на всех возможных конфигурациях оборудования.
            </p>
            <p className="mt-2">
              В максимальной степени, допустимой применимым законодательством, Разработчик не несет ответственности за любые косвенные, случайные или штрафные убытки, возникшие в связи с использованием или невозможностью использования Приложения.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Изменение условий</h2>
            <p>
              Разработчик вправе вносить изменения в настоящее Соглашение. Актуальная версия документа публикуется по постоянному адресу в сети Интернет: <code>https://lingobeats.app/terms</code> (или <code>/terms</code>). Дальнейшее использование Приложения после публикации изменений означает согласие с новой редакцией.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Контактные данные разработчика</h2>
            <p>
              По всем вопросам, связанным с условиями лицензирования, подписками или работой Приложения:
            </p>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300">
              <p><strong className="text-white">Разработчик:</strong> GlazerDev</p>
              <p className="mt-1">
                <strong className="text-white">Email службы поддержки:</strong>{' '}
                <a href="mailto:glazer.dev@gmail.com" className="text-amber-400 hover:underline">
                  glazer.dev@gmail.com
                </a>
              </p>
              <p className="mt-1">
                <strong className="text-white">Центр поддержки на сайте:</strong>{' '}
                <a href="/support" className="text-amber-400 hover:underline">
                  Служба поддержки (/support)
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Back and Cross Navigation */}
        <div className="mt-12 border-t border-white/10 pt-8 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Вернуться на главную страницу</span>
          </a>
          <a
            href="/privacy"
            className="text-xs text-slate-400 hover:text-white"
          >
            Политика конфиденциальности →
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
};
