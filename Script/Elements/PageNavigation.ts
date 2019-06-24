import { Element } from "./Element";
import { LoggedUser } from "../LoggedUser";

export class PageNavigation extends Element{
	public get ClassName(): string { return `PageNavigation`; }	
	private static MenuItems: { [link: string]: { name: string; icon: string } } = {
		"https://github.com/su-fit-vut/student-voice": {
			name: `Hlas studentů`,
			icon: `fa-comments`
		},
		"/profil": {
			name: `{userName}`,
			icon: `fa-user-alt`
		}
	};

	public constructor() {
		super(`nav`);
		
		this.LoginChanged();
	}

	private LoginChanged(): void {
		while (this.Root.firstChild)
			this.Root.removeChild(this.Root.firstChild);
		
		if (!LoggedUser.IsLogged) return;

		for (let href in PageNavigation.MenuItems) {
			let icon = document.createElement(`i`);
			icon.className = `far ${PageNavigation.MenuItems[href].icon}`;

			let anchor = document.createElement(`a`);
			anchor.href = href;
			anchor.textContent = PageNavigation.MenuItems[href].name;
			anchor.prepend(icon);
			this.Root.append(anchor);
		}
	}
}