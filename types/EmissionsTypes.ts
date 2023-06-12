import { Sectors } from "./SectorsTypes";

export enum Units {
  Tonnes,
  Kilograms
}

export type EmissionsPerSector = {
  sector: Sectors;
  emissions: Emissions;
};

export type Emissions = {
  unit: Units;
  value: number;
  evolutionRate: number;
};
