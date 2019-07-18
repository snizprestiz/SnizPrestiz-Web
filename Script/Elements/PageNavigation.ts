import { PageRouter } from './../PageRouter';
import { Navigation as NavigationElement} from "./Basic/Navigation";
import { LoggedUser } from "../LoggedUser";
import { Icon } from "./Basic/Icon";
import { Link } from "./Basic/Link";
import { LinkTarget } from "./Basic/LinkTarget";
import { Observer } from "../Observer";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";

/**
 * Hlavní navigace webu
 */
export class PageNavigation extends NavigationElement{
	public get ClassName(): string { return `PageNavigation`; }

	public constructor() {
		super();
		this.OnLoginChanged();
		Observer.RegisterLoginChange((): void => this.OnLoginChanged());
		Observer.RegisterPageChanged((): void => this.OnLoginChanged());
	}

	/**
	 * Metoda, která se zavolá při změně příhlášení
	 */
	private OnLoginChanged(): void {
		this.Children.splice(0, this.Children.length);

		this.Children.push(
			new Link(`/element-test`, LinkTarget.NewTab,
				new Icon(`code`),
				`Dev`
			),
			new Link(`https://github.com/su-fit-vut/student-voice`, LinkTarget.NewTab,
				new Icon(`comments`),
				`Hlas studentů`
			)
		);

		if (LoggedUser.IsLogged) {
			this.Children.push(new Link(`/account`, new Icon(`user`), LoggedUser.Login));
			return;
		}

		if (!(PageRouter.CurrentPage instanceof Login))
			this.Children.push(new Link(`/login`, new Icon(`sign-in-alt`), `Přihlásit se`));

		if (!(PageRouter.CurrentPage instanceof Register))
			this.Children.push(new Link(`/register`, new Icon(`user-plus`), `Vytvořit účet`));
	}
}
