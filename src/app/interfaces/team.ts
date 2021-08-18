import { ActiveCompetition } from "./active-competition";
import { Area } from "./area";
import { Squad } from "./squad";

export interface Team {
  id: number;
  name: string;
  crestUrl: string;

  area?: Area;
  activeCompetitions: ActiveCompetition[];
  shortName: string;
  tla: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  squad: Squad[];
  lastUpdated: Date;
}
