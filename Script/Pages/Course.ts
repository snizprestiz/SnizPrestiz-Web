import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { CourseCode } from "../Elements/CourseCode";
import { Paragraph } from "../Elements/Basic/Paragraph";
import { Link } from "../Elements/Basic/Link";
import { Navigation } from "../Navigation";

export class Course extends Page{
	public get Name(): string { return `Course`; }

	public Code: string;

	public constructor(code: string) {
		super();

		this.Code = code.toUpperCase();
		Navigation.PageTitle = this.Code;

		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new Heading(HeadingLevel.Title,
						new CourseCode(this.Code),
						`Název předmětu`
					)
				),
				new Paragraph(`Hello world!`),
				new Link(`/all-courses`, `Zpět na všechny předměty`)
			)
		);
	}
}
