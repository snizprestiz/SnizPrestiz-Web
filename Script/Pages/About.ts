import { PageRouter } from './../PageRouter';
import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { LoggedUser } from "../LoggedUser";
import { Paragraph } from "../Elements/Basic/Paragraph";
import { LoginForm } from "../Elements/LoginForm";

export class About extends Page{
	public get Name(): string { return `About`; }

	public constructor() {
		super();

		if (LoggedUser.IsLogged) {
			this._LoadAgain = true;
			history.replaceState(null, null, `/all-courses`);
			return;
		}

		PageRouter.PageTitle = null;
		document.body.classList.add(`LargeHeader`);

		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new LoginForm()
				),
				new Heading(HeadingLevel.Section, `Řazení předmětů, které dává smysl`),
				new Paragraph(`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Maecenas libero. In rutrum. Aenean id metus id velit ullamcorper pulvinar.`),
				new Heading(HeadingLevel.Section, `Přehlednější statistiky úspěšnosti`),
				new Paragraph(`Pellentesque pretium lectus id turpis. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`),
				new Heading(HeadingLevel.Section, `Integrace s VUT Discord serverem`),
				new Paragraph(`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.`),
				new Heading(HeadingLevel.Section, `Volitelný tmavý režim`),
				new Paragraph(`Etiam neque. Cras elementum. Ut tempus purus at lorem. Fusce aliquam vestibulum ipsum. Morbi scelerisque luctus velit. Nulla non lectus sed nisl molestie malesuada.`),
				new Heading(HeadingLevel.Section, `Open source`),
				new Paragraph(`Et harum quidem rerum facilis est et expedita distinctio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Sed convallis magna eu sem. Aliquam id dolor. Integer in sapien.`),
			)
		);
	}
}
