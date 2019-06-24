import { Element } from "./Element";
import { OverviewGraph } from "../Graph/OverviewGraph";
import { GraphDataByYear } from "../Graph/GraphDataByYear";
import { GraphParser } from "../Graph/DataParser/GraphParser";
import { Histogram } from "../Graph/Histogram";

export class CourseStatistics extends Element{
	public get ClassName(): string { return `CourseStatistics`; }
	private Header: HTMLElement;
	private OverviewGraph: OverviewGraph;
	private YearlyGraphs: HTMLElement;

	private CourseAbbr: string;
	private CourseName: string;
	private GraphData: GraphDataByYear[] = [];

	public constructor(courseAbbr: string, courseName: string) {
		super();

		this.CourseAbbr = courseAbbr;
		this.CourseName = courseName;

		this.Header = document.createElement(`header`);
		this.Header.innerHTML = `<h1><abbr>${this.CourseAbbr}</abbr> ${this.CourseName}</h1>`;

		this.OverviewGraph = new OverviewGraph();
		this.YearlyGraphs = document.createElement(`div`);
		
		this.Root.append(this.Header);
		this.Root.append(this.OverviewGraph.HTMLElement);
		this.Root.insertAdjacentHTML(`beforeend`, `<div class='GraphLabel primary'>Procento úspěšných studentů</div>`);
		this.Root.insertAdjacentHTML(`beforeend`, `<div class='GraphLabel secondary'>Počet přihlášených studentů</div>`);
		this.Root.insertAdjacentHTML(`beforeend`, `<h2>Histogramy jednotlivých roků</h2>`);
		this.Root.append(this.YearlyGraphs);

		this.LoadGraphData();
	}

	private AddHistogram(data: GraphDataByYear): void {
		let histogram = new Histogram(data);
		this.YearlyGraphs.append(histogram.HTMLElement);
		//this.YearlyGraphs.insertAdjacentHTML("afterbegin", `<h3>${data.Year}</h3>`)
		histogram.ResizeEvent();
	}

	private LoadGraphData(year: number = 2018): void {
		if (year < 2003) {
			this.OverviewGraph.Data = this.GraphData;
			return;
		}

		GraphParser.FromUrl(`/${this.CourseAbbr}${year}.png`, (data): void => {
			let dataByYear = new GraphDataByYear(year, data);
			this.GraphData.push(dataByYear);
			this.AddHistogram(dataByYear);
			this.LoadGraphData(year - 1);
		});
	}
}