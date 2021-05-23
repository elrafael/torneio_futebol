import { Area } from "./area";
import { Competitions } from "./competitions";
import { Player } from "./player";

export interface Team {
  address: string;
  area: Area;
  clubColors: string;
  activeCompetitions: Competitions[];
  crestUrl: string;
  email: string;
  founded: number;
  id: number;
  lastUpdated: string;
  name: string;
  phone: string;
  shortName: string;
  tla: string;
  venue: string;
  squad: Player[];
  website: string;
}

