import { C02_Emissions, EmissionsPerSector, quantity_values, Sectors, Units } from "../types/EmissionsTypes";

// const C02Emissions_2021: C02_Emissions = {
//   fossil_fuels: 37120000000,
//   land_use_change: 3940000000,
//   value: quantity_values.Tonnes,
// };

//export const C02Emissions_2021: C02_Emissions = {

export const C02Emissions_PerPrincipalSector_2021: EmissionsPerSector[] = [
  {
    sector: Sectors.PowerIndustry,
    emissions: {
      value: 37120000000,
      unit: Units.Tonnes,
      evolutionRate: 0.06,
    },
  },
  {
    sector: Sectors.Transportation,
    emissions: {
      value: 37120000000,
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
    sector: Sectors.OtherIndustry,
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
    sector: Sectors.LandUseChange,
    emissions: {
      value: 37120000000,
      unit: Units.Tonnes,
      evolutionRate: 0.06,
    },
  },
];


//const C02EmissionsEvolutionRate = 0.06;