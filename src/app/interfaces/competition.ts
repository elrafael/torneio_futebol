import { Area } from "./area";
import { CurrentSeason } from "./current-season";

export interface Competition {
  id: number;
  area: Area;
  name: string;
  code: string | null;
  emblemUrl: string;
  plan: string;
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}
