import { WidthLimitedElement } from "./Basic/WidthLimitedElement";
import { CourseList } from "./CourseList";
import { CourseStatistics } from "./CourseStatistics";

export class MainContent extends WidthLimitedElement{
	public get TagName(): string { return `main`; }
	public get ClassName(): string { return `MainContent`; }

	private Courses: CourseList;
	private CourseStatistics: CourseStatistics;

	public constructor() {
		super();

		//this.Courses = new CourseList();
		//this.Children.push(this.Courses);

		this.CourseStatistics = new CourseStatistics(`IOS`, `Operační systémy`);
		this.Children.push(this.CourseStatistics);
	}
}