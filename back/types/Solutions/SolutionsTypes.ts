export type SolutionType = {
  id: number;
  description: string;
  image?: string;
  link?: string;
  sector: string;
  subSector?: string;
  tags?: string[];
};

export type SolutionTypeWithData = {
  type: SolutionType,
  year: number,
  price: number,
  avoidedEmissions: number,
}


export type FuturisticSolutionType = {
  type: SolutionType,
  dataPrevisions: SolutionTypeWithData[],
}