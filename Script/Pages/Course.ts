import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { Abbreviation } from "../Elements/Abbreviation";
import { Paragraph } from "../Elements/Basic/Paragraph";
import { Link } from "../Elements/Basic/Link";
import { LinkTarget } from "../Elements/Basic/LinkTarget";
import { Navigation } from "../Navigation";

export class Course extends Page{
	public get Name(): string { return `Course`; }

	public Abbr: string;

	public constructor(abbr: string) {
		super();
		
		this.Abbr = abbr.toUpperCase();
		Navigation.PageTitle = this.Abbr;

		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new Heading(HeadingLevel.Title,
						new Abbreviation(this.Abbr),
						`Název předmětu`
					)
				),
				new Paragraph(`Hello world!`),
				new Link(`/all-courses`, `Zpět na všechny předměty`)
			)
		);
	}
}