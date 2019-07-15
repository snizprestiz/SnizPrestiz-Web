import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { Link } from "../Elements/Basic/Link";
import { Navigation } from "../Navigation";

export class Login extends Page{
	public get Name(): string { return `Login`; }

	public constructor() {
		super();
		Navigation.PageTitle = `Přihlášení`;
		
		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new Heading(HeadingLevel.Title, `Přihlášení`)
				),
				new Link(`/register`, `Vytvořit nový účet`)
			)
		);
	}
}