import { Element } from "./Element";
import { LoggedUser } from "../LoggedUser";

export class PageNavigation extends Element{
	private static DefaultItems = { };

	private static UserItems = {
		"https://wis.fit.vutbr.cz/FIT/st/oznuk.php.cs": {
			name: "Podat oznuk",
			icon: "far fa-head-side-brain"
		},
		"/odhlaseni": {
			name: "Odhlášení",
			icon: "far fa-sign-out-alt"
		},
		"/profil": {
			name: "Profil",
			icon: "far fa-user-alt"
		}
	}

	public constructor() {
		super("nav");
		
		let itemsSource = LoggedUser.IsLogged ? PageNavigation.UserItems : PageNavigation.DefaultItems;
		for (let href in itemsSource) {
			let icon = document.createElement("i");
			icon.className = itemsSource[href].icon;

			let anchor = document.createElement("a");
			anchor.href = href;
			anchor.innerText = itemsSource[href].name;
			anchor.prepend(icon);
			this.Root.append(anchor);
		}
	}
}