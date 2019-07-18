import { PageRouter } from './PageRouter';
import { KeyboardFocusOnly } from './KeyboardFocusOnly';
import { PageHeader } from "./Elements/PageHeader";
import { MainContent } from "./Elements/MainContent";
import { PageFooter } from "./Elements/PageFooter";
import { LoggedUser } from "./LoggedUser";

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

		KeyboardFocusOnly.Activate();
		PageRouter.Initialize();
	}
}

new Main();
