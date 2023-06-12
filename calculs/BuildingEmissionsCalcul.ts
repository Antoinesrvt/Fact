import { EmissionsPerSector } from "../back/types/EmissionsTypes";
import { SectorListType } from "../back/types/SectorsTypes";

function getMaterialEmissions(material: string, emissions: number, alreadyCalculatedEmissions?: number): number | string {
  switch (material) {
    case "wood":
      return emissions;
    case "concrete":
      if(alreadyCalculatedEmissions === undefined) return "You must add the emissions of the ciment for concrete"
      return emissions - alreadyCalculatedEmissions;
    case "steel":
      return emissions;
    default:
      return emissions;
  }
}

function getRejectedEmissions(globalEmissions: number, absorbedEmissions: number): number {
  return globalEmissions / absorbedEmissions;
}

function getEmissionsPercentBySectors(totalEmissions: number, sectors: EmissionsPerSector[]): Array<number> {
  const emissionsPerSector = Array<number>(sectors.length);
  for (let i = 0; i < sectors.length; i++) {
    emissionsPerSector.push(
      (sectors[i].emissions.value * 100) / totalEmissions
    );
  }
  return emissionsPerSector;
}