import { GraphData } from "./GraphData";

export class GraphDataByYear extends GraphData{
	public Year: number;

	public constructor(year? : number, graphData? : GraphData) {
		super();

		if (year) this.Year = year;

		if (!graphData) return;

		this.Failed = graphData.Failed;
		this.Passed = graphData.Passed;
		this.PointsDistribution = graphData.PointsDistribution;
	}
}