import { Element } from "./Basic/Element";
import { Heading } from "./Basic/Heading";
import { HeadingLevel } from "./Basic/HeadingLevel";
import { Header } from "./Basic/Header";
import { Paragraph } from "./Basic/Paragraph";

export class CourseList extends Element{
	public get ClassName(): string { return `CourseList`; }
	
	private MyCoursesContainer: Element;
	private AllCoursesContainer: Element;
	//private MyCourses: any;
	//private AllCourses: any;

	public constructor() {
		super();
		
		this.MyCoursesContainer = new Element();
		this.MyCoursesContainer.DOM.className = `coursesContainer myCourses`;
		
		this.AllCoursesContainer = new Element();
		this.AllCoursesContainer.DOM.className = `coursesContainer allCourses`;
		
		this.Children.push(
			new Header(
				new Heading(HeadingLevel.Title, `Seznam předmětů`),
				new Paragraph(`Hello world!`)
			),
			new Heading(HeadingLevel.Section, `Moje předměty`),
			this.MyCoursesContainer,
			new Heading(HeadingLevel.Section, `Všechny předměty`),
			this.AllCoursesContainer
		);
	}
}