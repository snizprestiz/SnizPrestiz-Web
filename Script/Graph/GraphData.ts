export enum DistributionIndex{
	NotRated = 0,
	GradeF0to9 = 1,
	GradeF10to19 = 2,
	GradeF20to29 = 3,
	GradeF30to39 = 4,
	GradeF40to49 = 5,
	GradeE = 6,
	GradeD = 7,
	GradeC = 8,
	GradeB = 9,
	GradeA = 10
}

export const DistributionLabels: string[] = [
	`Nic`,
	`0-9`,
	`10-19`,
	`20-29`,
	`30-39`,
	`40-49`,
	`50-59`,
	`60-69`,
	`70-79`,
	`80-89`,
	`90+`
];

export class GraphData{
	public Passed: number;
	public Failed: number;
	
	public get Enrolled(): number {
		return this.Passed + this.Failed;
	}
	
	public PointsDistribution: number[];

	public constructor() {
		this.PointsDistribution = new Array(11);
	}
}