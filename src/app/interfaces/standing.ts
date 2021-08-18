import { Competition } from "./competition";
import { Season } from "./season";
import { Table } from "./table";

export interface Standing {
  stage: string;
  type: string;
  group?: any;
  table: Table[];
}

export interface StandingResult {
  filters: any;
  competition: Competition;
  season: Season;
  standings: Standing[];
}
