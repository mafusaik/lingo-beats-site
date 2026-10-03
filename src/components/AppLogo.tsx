import React, { useState } from 'react';
import logoDarkImg from '../assets/logo_dark_512.png';

interface AppLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({
  className = 'h-9 w-9',
  size = 36,
  showWordmark = false,
  wordmarkClassName = 'text-xl font-bold tracking-tight text-white',
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-3 select-none">
      {!imgError ? (
        <img
          src={logoDarkImg}
          alt="Lingo Beats"
          className={`${className} rounded-lg object-contain shadow-sm`}
          onError={() => setImgError(true)}
          loading="eager"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 512 512"
          className={`${className} rounded-lg overflow-hidden shadow-sm`}
        >
          <rect width="512" height="512" fill="#1e2c48" />
          <text x="76" y="246" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fill="#FFFFFF" fontSize="104">Lingo</text>
          <text x="76" y="348" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fill="#FFFFFF" fontSize="104">Beats</text>
          <g fill="#f5a623">
            <rect x="386" y="260" width="17" height="92" rx="8.5" />
            <rect x="414" y="280" width="17" height="52" rx="8.5" />
            <rect x="442" y="274" width="17" height="64" rx="8.5" />
            <rect x="470" y="290" width="17" height="32" rx="8.5" />
          </g>
        </svg>
      )}

      {showWordmark && (
        <span className={`font-['Plus_Jakarta_Sans',sans-serif] ${wordmarkClassName}`}>
          Lingo Beats
        </span>
      )}
    </div>
  );
};
