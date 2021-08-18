import { Team } from "./team";

export interface Table {
  position: number;
  team: Team;
  playedGames: number;
  form?: any;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
