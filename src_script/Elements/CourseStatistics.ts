import { Element } from "./Element";
import { OverviewGraph } from "../Graph/OverviewGraph";
import { GraphDataByYear } from "../Graph/GraphDataByYear";
import { GraphParser } from "../Graph/DataParser/GraphParser";

export class CourseStatistics extends Element{
	private Header: HTMLElement;
	private OverviewGraph: OverviewGraph;
	private YearlyGraphs: HTMLElement;

	private CourseAbbr: string;
	private GraphData: GraphDataByYear[] = [];

	public constructor(courseAbbr: string) {
		super();

		this.CourseAbbr = courseAbbr;
		
		let courseName: string = "Operační systémy";

		this.Header = document.createElement("header");
		this.Header.innerHTML = `<h1><abbr>${courseAbbr}</abbr> ${courseName}</h1>`;

		this.OverviewGraph = new OverviewGraph();
		this.YearlyGraphs = document.createElement("div");
		
		this.Root.classList.add("courseStatistics");
		this.Root.append(this.Header);
		this.Root.append(this.OverviewGraph.HMTLElement);
		this.Root.insertAdjacentHTML("beforeend", "<div class='graphLabel primary'>Procento úspěšných studentů</div>");
		this.Root.insertAdjacentHTML("beforeend", "<div class='graphLabel secondary'>Počet přihlášených studentů</div>");
		this.Root.insertAdjacentHTML("beforeend", "<h2>Histogramy jednotlivých roků</h2>");
		this.Root.append(this.YearlyGraphs);

		this.LoadGraphData();
	}

	private LoadGraphData(year: number = 2003) {
		if (year >= 2019) {
			this.OverviewGraph.Data = this.GraphData;
			return;
		}

		GraphParser.FromUrl(`/${this.CourseAbbr}${year}.png`, (data) => {
			this.GraphData.push(new GraphDataByYear(year, data));
			this.LoadGraphData(year + 1);
		});
	}
}