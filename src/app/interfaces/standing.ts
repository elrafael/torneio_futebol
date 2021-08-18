import { Table } from "./table";

export interface Standing {
  stage: string;
  type: string;
  group?: any;
  table: Table[];
}
