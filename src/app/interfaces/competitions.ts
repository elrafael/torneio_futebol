import { Area } from "./area";

export interface Competitions {
  id?: number;
  area?: Area;
  name?: string;
  code?: string;
  emblemUrl?: string;
  plan?: string;
  competitions?: {};
  currentSeason?: CurrentSeason;
  lastUpdated?: string;
}

interface CurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: string;
}
