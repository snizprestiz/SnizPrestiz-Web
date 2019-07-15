import { PageHeader } from "./Elements/PageHeader";
import { MainContent } from "./Elements/MainContent";
import { PageFooter } from "./Elements/PageFooter";
import { LoggedUser } from "./LoggedUser";
import { Navigation } from "./Navigation";

/**
 * Hlavní třída spuštění stránky
 */
export class Main{
	public constructor() {
		//LoggedUser.IsLogged = true;
		LoggedUser.Login = `xplagiat0b`;

		document.body.append(
			new PageHeader().DOM,
			new MainContent().DOM,
			new PageFooter().DOM
		);

		Navigation.Initialize();
	}
}

new Main();
