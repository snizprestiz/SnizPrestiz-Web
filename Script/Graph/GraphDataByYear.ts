import { GraphData } from "./GraphData";

/**
 * Data histogramu podle roku
 */
export class GraphDataByYear extends GraphData{
	/**
	 * Rok otevření předmětu
	 */
	public Year: number;

	/**
	 * @param year Rok pro který tato data platí
	 * @param graphData Původní data
	 */
	public constructor(year? : number, graphData? : GraphData) {
		super();

		if (year) this.Year = year;

		if (!graphData) return;

		this.Failed = graphData.Failed;
		this.Passed = graphData.Passed;
		this.PointsDistribution = graphData.PointsDistribution;
	}
}
