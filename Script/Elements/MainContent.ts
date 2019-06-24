import { ElementWithSection } from "./ElementWithSection";
import { CourseList } from "./CourseList";
import { CourseStatistics } from "./CourseStatistics";

export class MainContent extends ElementWithSection{
	public get ClassName(): string { return `MainContent`; }
	private Courses: CourseList;
	private CourseStatistics: CourseStatistics;

	public constructor() {
		super(`main`);

		this.Courses = new CourseList();
		//this.Inner.append(this.Courses.RootHTMLElement);

		this.CourseStatistics = new CourseStatistics(`IOS`, `Operační systémy`);
		this.Inner.append(this.CourseStatistics.RootHTMLElement);
	}
}