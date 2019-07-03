import { Navigation } from "./Basic/Navigation";
import { LoggedUser } from "../LoggedUser";
import { Icon } from "./Basic/Icon";
import { Link } from "./Basic/Link";
import { LinkTarget } from "./Basic/LinkTarget";

export class PageNavigation extends Navigation{
	public get ClassName(): string { return `PageNavigation`; }
	
	private static MenuItems: { [link: string]: { name: string; icon: string } } = {
		"https://github.com/su-fit-vut/student-voice": {
			name: `Hlas studentů`,
			icon: `comments`
		},
		"/profil": {
			name: `{userName}`,
			icon: `user-alt`
		}
	};

	public constructor() {
		super();
		this.LoginChanged();
	}

	private LoginChanged(): void {
		this.Children.splice(0, this.Children.length);
		
		if (!LoggedUser.IsLogged) return;

		for (let url in PageNavigation.MenuItems) {
			this.Children.push(
				new Link(url,
					LinkTarget.Default,
					new Icon(PageNavigation.MenuItems[url].icon),
					PageNavigation.MenuItems[url].name
				)
			);
		}
	}
}