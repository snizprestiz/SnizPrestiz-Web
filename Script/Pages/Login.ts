import { PageRouter } from './../PageRouter';
import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { LoginForm } from "../Elements/LoginForm";

export class Login extends Page{
	public get Name(): string { return `Login`; }

	public constructor() {
		super();
		PageRouter.PageTitle = `Přihlášení`;

		document.body.classList.add(`LargeHeader`);

		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new Heading(HeadingLevel.Title, `Přihlášení`)
				),
				new LoginForm(false)
			).Options({Class: `Card Small`})
		);
	}
}
