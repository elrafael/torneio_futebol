import { Area } from "./area";

export interface ActiveCompetition {
  id: number;
  area: Area;
  name: string;
  code: string;
  plan: string;
  lastUpdated: Date;
}
