import React from 'react';
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2, CreditCard } from 'lucide-react';
import { Footer } from '../components/Footer';
import { getRoute } from '../utils/routes';

export const PrivacyPage: React.FC = () => {
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
            <span className="hidden sm:inline-block text-xs text-slate-500">/ Политика конфиденциальности</span>
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
            <Shield className="h-4 w-4" />
            <span>Юридический документ</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>GlazerDev</span>
          </div>

          <h1 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Политика конфиденциальности
          </h1>
          
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Приложение: Lingo Beats</span>
            <span aria-hidden="true">·</span>
            <span>Разработчик: GlazerDev</span>
            <span aria-hidden="true">·</span>
            <span>Дата вступления в силу: 1 января 2026 г.</span>
          </div>
        </div>

        {/* Highlights Banner */}
        <div className="my-8 rounded-2xl border border-teal-500/20 bg-teal-950/20 p-6 backdrop-blur-sm">
          <h2 className="text-base font-bold text-teal-300 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-teal-400" />
            Главное о защите ваших данных в Lingo Beats:
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Мы не собираем и не требуем ввода паспортных данных, паролей или номеров телефонов.</li>
            <li>• Все транзакции по оплате подписок обрабатываются напрямую Apple (In-App Purchase) и Google Play: разработчик не получает и не хранит данные ваших платежных карт.</li>
            <li>• История прослушивания, избранные аудиотреки и настройки скорости хранятся локально на вашем смартфоне.</li>
            <li>• Мы не продаем и не передаем персональные данные сторонним рекламным сетям.</li>
          </ul>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-10 text-sm leading-relaxed text-slate-300">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности регулирует порядок обработки и обеспечения безопасности данных пользователей мобильного приложения «Lingo Beats» (далее — «Приложение»), разрабатываемого GlazerDev (далее — «Разработчик»).
            </p>
            <p className="mt-2">
              Используя Приложение, вы соглашаетесь с условиями настоящей Политики конфиденциальности. Если вы не согласны с какими-либо положениями, пожалуйста, воздержитесь от использования Приложения.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Какие данные обрабатываются</h2>
            <p>
              Приложение создано с соблюдением принципа минимизации данных:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1.5 text-slate-300">
              <li>
                <strong className="text-white">Локальные данные устройства:</strong> история воспроизведения аудиотреков, текущий прогресс, закладки, выбранный темп воспроизведения (например, 0.75x или 1.25x). Эти данные хранятся во внутреннем изолированном хранилище приложения на вашем смартфоне и не передаются на внешние серверы.
              </li>
              <li>
                <strong className="text-white">Платежные данные и подписки:</strong> оформление платной подписки Lingo Beats Premium осуществляется через стандартный платежный API платформ (Apple In-App Purchase в iOS / Google Play Billing в Android). Разработчик GlazerDev не имеет доступа к номерам банковских карт, банковским счетам или кодам безопасности CVC/CVV. Вся обработка финансовой информации производится исключительно операторами Apple Inc. и Google LLC в соответствии с их политиками безопасности.
              </li>
              <li>
                <strong className="text-white">Технические данные сбоев (crash logs):</strong> обезличенные отчеты об ошибках, предоставляемые стандартными инструментами Google Play Console и App Store Connect, используемые исключительно для устранения неполадок.
              </li>
              <li>
                <strong className="text-white">Информация при обращении в поддержку:</strong> ваш адрес электронной почты и текст сообщения, если вы обращаетесь на адрес <a href="mailto:glazer.dev@gmail.com" className="text-amber-400 underline">glazer.dev@gmail.com</a> или через форму на сайте.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Цели использования информации</h2>
            <p>
              Информация используется исключительно для:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Обеспечения работоспособности функций билингвального воспроизведения и параллельного текста.</li>
              <li>Проверки статуса активной подписки через системные чеки StoreKit (iOS) / Google Play Billing (Android) для открытия доступа к премиум-контенту.</li>
              <li>Ответов на вопросы и обращения в службу технической поддержки.</li>
              <li>Устранения технического брака и ошибок в работе приложения.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Хранение аудиозаписей и кеширование</h2>
            <p>
              Офлайн-воспроизведение доступно в обеих версиях приложения: при начале прослушивания аудиотрек автоматически кешируется на вашем устройстве и в дальнейшем доступен без интернет-соединения. Кешированные файлы сохраняются в изолированной файловой системе приложения на вашем смартфоне и могут быть удалены в любое время через меню приложения или стандартную очистку памяти устройства.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Передача данных третьим лицам</h2>
            <p>
              Разработчик GlazerDev никогда не продает, не сдает в аренду и не распространяет персональные данные пользователей. Данные не передаются сторонним рекламным платформам или брокерам данных. Ни в одной из версий приложения не используется реклама.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Безопасность и права пользователей</h2>
            <p>
              Вы имеете полное право в любой момент прекратить использование приложения и удалить все сохраненные данные, удалив Приложение со своего устройства. Для отмены подписки используйте меню настроек вашей учетной записи Apple ID или Google Play.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Изменения политики конфиденциальности</h2>
            <p>
              Разработчик оставляет за собой право обновлять настоящую Политику конфиденциальности в соответствии с требованиями законодательства и правилами магазинов приложений (App Store / Google Play). Актуальная версия всегда доступна по адресу: <code>/privacy</code>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Контактные данные разработчика</h2>
            <p>
              По любым вопросам, касающимся настоящей Политики конфиденциальности или обработки данных в Lingo Beats:
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
                <strong className="text-white">Раздел поддержки на сайте:</strong>{' '}
                <a href="/support" className="text-amber-400 hover:underline">
                  Служба поддержки (/support)
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-12 border-t border-white/10 pt-8 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Вернуться на главную страницу</span>
          </a>
          <a
            href="/terms"
            className="text-xs text-slate-400 hover:text-white"
          >
            Пользовательское соглашение и условия подписки →
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
};
