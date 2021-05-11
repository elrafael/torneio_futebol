import { Area } from "./area";
import { Player } from "./player";

export interface Team {
  address: string;
  area: Area;
  clubColors: string;
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

