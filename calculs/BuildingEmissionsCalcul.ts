
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