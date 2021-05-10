export interface Competitions {
  id?: number;
  name?: string;
  code?: string;
  emblemUrl?: string;
  plan?: string;
  competitions?: {};
  currentSeason?: CurrentSeason;
}

interface CurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: string;
}
