import { Element } from "./Basic/Element";
import { OverviewGraph } from "../Graph/OverviewGraph";
import { GraphDataByYear } from "../Graph/GraphDataByYear";
import { GraphParser } from "../Graph/DataParser/GraphParser";
import { Histogram } from "../Graph/Histogram";
import { Header } from "./Basic/Header";
import { Heading } from "./Basic/Heading";
import { HeadingLevel } from "./Basic/HeadingLevel";
import { CourseCode } from "./CourseCode";

/**
 * Statistika úspěšnosti konkrétního předmětu
 * TODO Předělat do stránky
 * TODO Je to prototyp, potom změnit
 */
export class CourseStatistics extends Element{
	public get ClassName(): string { return `CourseStatistics`; }

	private OverviewGraph: OverviewGraph;
	private YearlyGraphs: Element;

	private CourseCode: string;
	private CourseName: string;
	private GraphData: GraphDataByYear[] = [];

	/**
	 * @param courseCode Zkratka předmětu
	 * @param courseName Celý název předmětu
	 */
	public constructor(courseCode: string, courseName: string) {
		super();

		this.CourseCode = courseCode;
		this.CourseName = courseName;
		this.OverviewGraph = new OverviewGraph();
		this.YearlyGraphs = new Element();

		this.Children.push(
			new Header(
				new Heading(HeadingLevel.Title,
					new CourseCode(this.CourseCode),
					this.CourseName
				)
			),
			this.OverviewGraph,
			new Element(`Procento úspěšných studentů`).Options(
				{Class: `GraphLabel primary`}
			),
			new Element(`Počet přihlášených studentů`).Options(
				{Class: `GraphLabel secondary`}
			),
			new Heading(HeadingLevel.Section, `Histogramy jednotlivých roků`),
			this.YearlyGraphs
		);

		this.LoadGraphData();
	}

	private AddHistogram(data: GraphDataByYear): void {
		let histogram = new Histogram(data);
		this.YearlyGraphs.Children.push(histogram);
		//this.YearlyGraphs.insertAdjacentHTML("afterbegin", `<h3>${data.Year}</h3>`)
		histogram.OnResize();
	}

	private LoadGraphData(year: number = 2018): void {
		if (year < 2003) {
			this.OverviewGraph.Data = this.GraphData;
			return;
		}

		GraphParser.FromUrl(`/${this.CourseCode}${year}.png`).then((data): void => {
			let dataByYear = new GraphDataByYear(year, data);
			this.GraphData.push(dataByYear);
			this.AddHistogram(dataByYear);
			this.LoadGraphData(year - 1);
		});
	}
}
