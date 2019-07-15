import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { Link } from "../Elements/Basic/Link";
import { Navigation } from "../Navigation";

export class Register extends Page{
	public get Name(): string { return `Register`; }

	public constructor() {
		super();
		Navigation.PageTitle = `Vytvořit nový účet`;

		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new Heading(HeadingLevel.Title, `Vytvořit nový účet`)
				),
				`Máte účet? `,
				new Link(`/login`, `Přihlasit se`)
			)
		);
	}
}
