import { ElementWithSection } from "./ElementWithSection";
import { CourseList } from "./CourseList";
import { GraphParser } from "../Graph/DataParser/GraphParser";
import { GraphDataByYear } from "../Graph/GraphDataByYear";
import { OverviewGraph } from "../Graph/OverviewGraph";
import { CourseStatistics } from "./CourseStatistics";

export class MainContent extends ElementWithSection{
	private Courses: CourseList;
	private CourseStatistics: CourseStatistics;

	public constructor() {
		super("main");

		//this.Courses = new CourseList();
		//this.Inner.append(this.Courses.RootHTMLElement);

		this.CourseStatistics = new CourseStatistics("IOS");
		this.Inner.append(this.CourseStatistics.RootHTMLElement);
	}
}