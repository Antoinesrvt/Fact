export enum Sectors {
  PowerIndustry,
  GlobalIndustry,
  Transport,
  Buildings,
  Agriculture,
  LandUse,
}

export type SectorsType = keyof typeof Sectors;


export enum PrincipalSectors {
  Energy,
  Industry,
  Waste,
  Agriculture_LandUse,
}

export type InformationPerSector = {
  sector: Sectors;
  informations: string;
};