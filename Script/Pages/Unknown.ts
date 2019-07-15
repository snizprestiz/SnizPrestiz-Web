import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { Paragraph } from "../Elements/Basic/Paragraph";
import { Link } from "../Elements/Basic/Link";
import { Navigation } from "../Navigation";

export class Unknown extends Page{
	public get Name(): string { return `Unknown`; }

	public constructor() {
		super();
		Navigation.PageTitle = `Stránka nenalezena`;
		
		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new Heading(HeadingLevel.Title, `Stránka nenalezena`)
				),
				new Paragraph(`Požadovaná stránka "${location.pathname}" nebyla nalezena.`),
				new Link(`/all-courses`, `Vrátit se na všechny předměty`)
			)
		);
	}
}