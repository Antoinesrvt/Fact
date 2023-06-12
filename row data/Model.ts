import { EmissionsPerSector, Units } from "../types/EmissionsTypes";
import { Sectors } from "../types/SectorsTypes";

export const C02Emissions_PerPrincipalSector: EmissionsPerSector[] = [
  {
    sector: Sectors.PowerIndustry,
    emissions: {
      value: 37120000000,
      unit: Units.Tonnes,
      evolutionRate: 0.06,
    },
  },
  {
    sector: Sectors.Transport,
    emissions: {
      value: 3712000000,
      unit: Units.Tonnes,
      evolutionRate: 0.06,
    },
  },
  {
    sector: Sectors.Buildings,
    emissions: {
      value: 37120000000,
      unit: Units.Tonnes,
      evolutionRate: 0.06,
    },
  },
  {
    sector: Sectors.GlobalIndustry,
    emissions: {
      value: 37120000000,
      unit: Units.Tonnes,
      evolutionRate: 0.06,
    },
  },
  {
    sector: Sectors.Agriculture,
    emissions: {
      value: 37120000000,
      unit: Units.Tonnes,
      evolutionRate: 0.06,
    },
  },
  {
    sector: Sectors.LandUse,
    emissions: {
      value: 37120000000,
      unit: Units.Tonnes,
      evolutionRate: 0.06,
    },
  },
];

export let TotalC02Emissions: number

