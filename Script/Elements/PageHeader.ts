import { PageLogo } from "./PageLogo";
import { PageNavigation } from "./PageNavigation";
import { HeaderSearch } from "./HeaderSearch";
import { WidthLimitedElement } from "./Basic/WidthLimitedElement";
import { Observer } from "../Observer";
import { LoggedUser } from "../LoggedUser";

export class PageHeader extends WidthLimitedElement{
	protected get TagName(): string { return `header`; }
	public get ClassName(): string { return `PageHeader`; }

	private Search: HeaderSearch = new HeaderSearch();

	public constructor() {
		super(
			new PageLogo(),
			new PageNavigation()
		);

		Observer.RegisterLoginChange((): void => this.LoginChange());
		this.LoginChange();
	}

	private LoginChange(): void {
		let index = this.Children.indexOf(this.Search);
		if (index >= 0)
			this.Children.splice(index, 1);

		if (LoggedUser.IsLogged) this.Children.push(this.Search);
	}
}
