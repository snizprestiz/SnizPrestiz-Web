import { Element } from "./Basic/Element";
import { OverviewGraph } from "../Graph/OverviewGraph";
import { GraphDataByYear } from "../Graph/GraphDataByYear";
import { GraphParser } from "../Graph/DataParser/GraphParser";
import { Histogram } from "../Graph/Histogram";
import { Header } from "./Basic/Header";
import { Heading } from "./Basic/Heading";
import { HeadingLevel } from "./Basic/HeadingLevel";
import { Abbreviation } from "./Abbreviation";

export class CourseStatistics extends Element{
	public get ClassName(): string { return `CourseStatistics`; }
	
	private OverviewGraph: OverviewGraph;
	private YearlyGraphs: Element;

	private CourseAbbr: string;
	private CourseName: string;
	private GraphData: GraphDataByYear[] = [];

	public constructor(courseAbbr: string, courseName: string) {
		super();

		this.CourseAbbr = courseAbbr;
		this.CourseName = courseName;
		this.OverviewGraph = new OverviewGraph();
		this.YearlyGraphs = new Element();

		this.Children.push(
			new Header(
				new Heading(HeadingLevel.Title,
					new Abbreviation(this.CourseAbbr),
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
		histogram.ResizeEvent();
	}

	private LoadGraphData(year: number = 2018): void {
		if (year < 2003) {
			this.OverviewGraph.Data = this.GraphData;
			return;
		}

		GraphParser.FromUrl(`/${this.CourseAbbr}${year}.png`).then((data): void => {
			let dataByYear = new GraphDataByYear(year, data);
			this.GraphData.push(dataByYear);
			this.AddHistogram(dataByYear);
			this.LoadGraphData(year - 1);
		});
	}
}