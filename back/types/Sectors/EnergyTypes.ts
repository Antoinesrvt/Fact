export enum EnergyUse {
  Buildings,
  Transport,
  Industry,
  Other,
}

export enum FossilFuel {
  Coal,
  Oil,
  Gas,
}

export enum RenewableEnergy {
  Nuclear,
  Hydro,
  Wind,
  Solar,
  Geothermal,
  Biomass,
  Waste,
  Biofuels,
  Other,
}

export type EnergySources = FossilFuel | RenewableEnergy;
export type EnergyUses = EnergyUse;
