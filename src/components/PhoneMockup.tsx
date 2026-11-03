import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';
import playerScreenshot from '../assets/Screenshot_20261003_100228.png';
import tracksScreenshot from '../assets/Screenshot_20261003_100242.png';
import playerVideo from '../assets/player_demo.mp4';

interface PhoneMockupProps {
  type?: 'player' | 'tracks';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ type = 'player' }) => {
  const [imgError, setImgError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]">
      {/* Decorative ambient aura */}
      <div className="absolute -inset-1 rounded-[48px] bg-gradient-to-b from-teal-500/25 to-amber-500/15 blur-xl pointer-events-none" />

      {/* Outer Phone Bezel */}
      <div className="relative rounded-[44px] border-4 border-slate-700 bg-slate-950 p-2 shadow-2xl ring-1 ring-white/15">
        
        {/* Ultra-thin ear speaker slit discreetly integrated into top bezel (outside screen area) */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1 w-12 rounded-full bg-slate-800/80 pointer-events-none" />

        {/* Screen Display Container */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#142b36] aspect-[9/19] select-none text-slate-100 flex flex-col justify-between">
          
          {type === 'player' && !videoError ? (
            /* Live Interactive Synchronized Karaoke Video with Sound Toggle */
            <div className="relative h-full w-full overflow-hidden group cursor-pointer" onClick={togglePlay}>
              <video
                ref={videoRef}
                className="h-[102%] w-full object-cover object-top -mt-1"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                poster={playerScreenshot}
                onError={() => setVideoError(true)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={playerVideo} type="video/mp4" />
                <source src="./assets/aistudio/2026-11-03_21.28.31_9896f264.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>

              {/* In-screen Floating Sound Toggle Button (top-right) */}
              <button
                type="button"
                onClick={toggleSound}
                className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-white/25 bg-slate-950/80 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-slate-900 hover:border-amber-400 active:scale-95 cursor-pointer"
                title={isMuted ? 'Включить звук' : 'Выключить звук'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="h-3.5 w-3.5 text-amber-400" />
                    <span className="hidden xs:inline">Вкл звук</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="h-3.5 w-3.5 text-teal-400 animate-pulse" />
                    <span className="text-teal-300">Звук</span>
                  </>
                )}
              </button>

              {/* Pause overlay icon on hover or when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 pointer-events-none">
                  <div className="rounded-full bg-slate-900/90 border border-white/20 p-4 text-amber-400 shadow-2xl">
                    <Play className="h-7 w-7 fill-amber-400 translate-x-0.5" />
                  </div>
                </div>
              )}
            </div>
          ) : !imgError ? (
            <div className="h-full w-full overflow-hidden flex flex-col pt-6">
              <img
                src={type === 'player' ? playerScreenshot : tracksScreenshot}
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
                  { level: 'Уровень A1', desc: 'Первые фразы, приветствия и базовая лексика' },
                  { level: 'Уровень A2', desc: 'Повседневная жизнь, диалоги и привычки' },
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

      {type === 'player' && !videoError && (
        <div className="mt-3.5 flex items-center justify-center">
          <button
            type="button"
            onClick={toggleSound}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-slate-800 hover:border-amber-400 active:scale-95 cursor-pointer"
          >
            {isMuted ? (
              <>
                <VolumeX className="h-4 w-4 text-amber-400" />
                <span>Включить звук видео</span>
              </>
            ) : (
              <>
                <Volume2 className="h-4 w-4 text-teal-400 animate-pulse" />
                <span>Звук включен · Нажмите, чтобы выключить</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
