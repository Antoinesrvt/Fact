import { EmissionsPerSector, Units } from "../types/EmissionsTypes";
import { Sectors } from "../types/SectorsTypes";

export const C02Emissions_PerPrincipalSector: EmissionsPerSector[] = [
  {
    sector: Sectors.PowerIndustry,
    emissions: {
      value: 0,
      unit: Units.Tonnes,
      evolutionRate: 0.0,
    },
  },
  {
    sector: Sectors.Transport,
    emissions: {
      value: 0,
      unit: Units.Tonnes,
      evolutionRate: 0.0,
    },
  },
  {
    sector: Sectors.Buildings,
    emissions: {
      value: 0,
      unit: Units.Tonnes,
      evolutionRate: 0.0,
    },
  },
  {
    sector: Sectors.GlobalIndustry,
    emissions: {
      value: 0,
      unit: Units.Tonnes,
      evolutionRate: 0.0,
    },
  },
  {
    sector: Sectors.Agriculture,
    emissions: {
      value: 0,
      unit: Units.Tonnes,
      evolutionRate: 0.0,
    },
  },
  {
    sector: Sectors.LandUse,
    emissions: {
      value: 0,
      unit: Units.Tonnes,
      evolutionRate: 0.0,
    },
  },
];

export let TotalC02Emissions: number

