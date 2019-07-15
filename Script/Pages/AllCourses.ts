import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { Element } from "../Elements/Basic/Element";
import { Navigation } from "../Navigation";
import { CourseListItem } from "../Elements/CourseListItem";

export class AllCourses extends Page{
	public get Name(): string { return `AllCourses`; }

	private MyCoursesContainer: Element;
	private AllCoursesContainer: Element;

	public constructor() {
		super();
		Navigation.PageTitle = `Seznam předmětů`;

		this.MyCoursesContainer = new Element().Options({Class: `CoursesContainer MyCourses`});
		this.AllCoursesContainer = new Element().Options({ Class: `CoursesContainer AllCourses` });
		
		this.AllCoursesContainer.Children.push(new CourseListItem(`IOS`, `Operační systémy`, `L`));
		
		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new Heading(HeadingLevel.Title, `Seznam předmětů`),
				),
				new Heading(HeadingLevel.Section, `Moje předměty`),
				this.MyCoursesContainer,
				new Heading(HeadingLevel.Section, `Všechny předměty`),
				this.AllCoursesContainer
			)
		);
	}
}