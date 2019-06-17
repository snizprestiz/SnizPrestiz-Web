export enum DistributionIndex{
	NotRated,
	GradeF_0to9,
	GradeF_10to19,
	GradeF_20to29,
	GradeF_30to39,
	GradeF_40to49,
	GradeE,
	GradeD,
	GradeC,
	GradeB,
	GradeA
}

export class GraphData{
	public Passed: number;
	public Failed: number;
	
	public get Enrolled() {
		return this.Passed + this.Failed
	}
	
	public PointsDistribution: number[];

	public constructor() {
		this.PointsDistribution = new Array(11);
	}
}