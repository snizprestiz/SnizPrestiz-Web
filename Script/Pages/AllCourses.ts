import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { Element } from "../Elements/Basic/Element";
import { Link } from "../Elements/Basic/Link";
import { LinkTarget } from "../Elements/Basic/LinkTarget";
import { Abbreviation } from "../Elements/Abbreviation";

export class AllCourses extends Page{
	public get Name(): string { return `AllCourses`; }

	public constructor() {
		super();
		this.RootElement = new WidthLimitedElement(
			new Header(
				new Heading(HeadingLevel.Title, `Všechny předměty`),
			),
			new Heading(HeadingLevel.Section, `Moje předměty`),
			new Element(),
			new Heading(HeadingLevel.Section, `Všechny předměty`),
			new Element(
				new Link(`/course/ios`, LinkTarget.Default,
					new Abbreviation(`IOS`),
					`Operační systémy`
				)
			)
		);
	}
}