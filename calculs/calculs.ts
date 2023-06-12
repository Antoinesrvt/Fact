function getAbsorbingRatio(globalEmissions: number, absorbedEmissions: number): number {
  return (absorbedEmissions * 100) / globalEmissions;
}

function getRejectedEmissions(globalEmissions: number, absorbedEmissions: number): number {
  return globalEmissions / absorbedEmissions;
}

