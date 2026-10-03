import React, { useState } from 'react';

interface PhoneMockupProps {
  type?: 'player' | 'tracks';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ type = 'player' }) => {
  const [imgError, setImgError] = useState(false);
  const src = type === 'player' ? '/Screenshot_20261003_100228.png' : '/Screenshot_20261003_100242.png';

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]">
      {/* Decorative ambient aura */}
      <div className="absolute -inset-1 rounded-[48px] bg-gradient-to-b from-teal-500/25 to-amber-500/15 blur-xl pointer-events-none" />

      {/* Outer Phone Bezel */}
      <div className="relative rounded-[44px] border-4 border-slate-700 bg-slate-950 p-2 shadow-2xl ring-1 ring-white/15">
        
        {/* Sleek speaker pill notch - raised and reduced to prevent overlapping text */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-3.5 w-24 rounded-full bg-slate-900 z-20 flex items-center justify-center pointer-events-none">
          <div className="h-1.5 w-1.5 rounded-full bg-slate-800 mr-2" />
          <div className="h-1 w-8 rounded-full bg-slate-800" />
        </div>

        {/* Screen Display Container with top padding so notch never obscures title */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#142b36] pt-6 aspect-[9/19] select-none text-slate-100 flex flex-col justify-between">
          
          {!imgError ? (
            <div className="h-full w-full overflow-hidden flex flex-col">
              <img
                src={src}
                alt={type === 'player' ? 'Экран аудиоплеера Lingo Beats' : 'Экран каталога треков Lingo Beats'}
                className="h-full w-full object-cover object-top"
                loading="eager"
                onError={() => setImgError(true)}
              />
            </div>
          ) : type === 'player' ? (
            /* Resilient built-in vector UI identical to the player screenshot with plenty of top clearance */
            <div className="h-full w-full bg-gradient-to-b from-[#142b36] via-[#1c4352] to-[#0c1f28] flex flex-col justify-between p-4 pt-4 text-center relative overflow-hidden">
              
              {/* Top Bar with clear spacing below the camera notch */}
              <div className="pt-2">
                <div className="flex justify-between items-center text-[11px] font-semibold text-white/80 px-2">
                  <span>10:02</span>
                  <div className="flex gap-1.5">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">Closer Than Ever</h3>
              </div>

              {/* Player Card */}
              <div className="my-3 rounded-2xl bg-white/10 p-3.5 border border-white/10 backdrop-blur-md">
                <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1.5">
                  <span>00:18</span>
                  <span>04:04</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/20 overflow-hidden mb-3">
                  <div className="h-full w-[12%] bg-white rounded-full" />
                </div>
                <div className="flex justify-between items-center px-2">
                  <span className="text-xs font-semibold text-slate-200">1.0x</span>
                  <div className="flex gap-1.5">
                    <div className="h-5 w-1.5 bg-white rounded-sm" />
                    <div className="h-5 w-1.5 bg-white rounded-sm" />
                  </div>
                  <span className="w-6" />
                </div>
              </div>

              {/* Lyrics List */}
              <div className="flex-1 overflow-hidden flex flex-col justify-center space-y-2 py-1 text-center">
                <p className="text-xs text-slate-400">Мы можем быть далеко</p>
                <p className="text-[11px] text-slate-500">We can be far apart</p>

                <p className="text-xs text-slate-400">Но всё равно на связи</p>
                <p className="text-[11px] text-slate-500">But still stay connected</p>

                {/* Active Highlight Line */}
                <div className="py-1">
                  <p className="text-lg font-bold text-white tracking-tight">Я вижу твоё лицо</p>
                  <p className="text-xs font-medium text-amber-300">I can see your face</p>
                </div>

                <p className="text-xs text-slate-400">Через яркий экран</p>
                <p className="text-[11px] text-slate-500">Through a bright screen</p>

                <p className="text-xs text-slate-400">И слышу твой голос</p>
                <p className="text-[11px] text-slate-500">And hear your voice</p>
              </div>

              {/* Bottom Nav Bar */}
              <div className="mx-auto w-3/4 rounded-full bg-[#132c38] border border-white/10 p-2 flex justify-around items-center">
                <div className="rounded-full bg-white/20 p-1.5 text-white">
                  <div className="h-3 w-3 rounded-full bg-white" />
                </div>
                <div className="h-3.5 w-3.5 border border-slate-400 rounded-sm" />
                <div className="h-3.5 w-3.5 border border-slate-400 rounded-full" />
              </div>
            </div>
          ) : (
            /* Resilient built-in UI for tracks with top clearance */
            <div className="h-full w-full bg-gradient-to-b from-[#142b36] via-[#183c4b] to-[#0e232d] p-4 pt-4 flex flex-col justify-between">
              <div className="pt-2">
                <div className="flex justify-between items-center text-[11px] font-semibold text-white/80 px-2">
                  <span>10:02</span>
                  <span>100%</span>
                </div>
                <h3 className="mt-3 text-center text-xl font-semibold text-white">Tracks</h3>
              </div>

              <div className="space-y-2 mt-4 flex-1">
                {[
                  { level: 'Уровень A2', desc: 'Базовая повседневная лексика и диалоги' },
                  { level: 'Уровень B1', desc: 'Практические ситуации, путешествия и работа' },
                  { level: 'Уровень B2', desc: 'Сложные темы, эмоциональные истории и ритм' },
                  { level: 'Уровень C1', desc: 'Абстрактные темы, идиомы и свободная речь' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-[#1d3c4b]/80 border border-white/10 p-3">
                    <p className="text-xs font-semibold text-amber-300">{item.level}</p>
                    <p className="text-[11px] text-slate-300 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mx-auto w-3/4 rounded-full bg-[#132c38] border border-white/10 p-2 flex justify-around items-center">
                <div className="h-3 w-3 rounded-full bg-slate-400" />
                <div className="rounded-full bg-white/20 p-1.5 text-white">
                  <div className="h-3 w-3 rounded-sm bg-white" />
                </div>
                <div className="h-3.5 w-3.5 border border-slate-400 rounded-full" />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
