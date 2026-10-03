export interface LyricLine {
  time: number; // in seconds
  ru: string;
  en: string;
}

export interface Track {
  id: string;
  title: string;
  level: 'A2' | 'B1' | 'B2' | 'C1';
  duration: string; // e.g. "4:04"
  durationSec: number;
  genre: string;
  descriptionRu: string;
  lyrics: LyricLine[];
}

export interface SupportTicket {
  id: string;
  name: string;
  email: string;
  category: string;
  platform: string;
  message: string;
  createdAt: string;
}
