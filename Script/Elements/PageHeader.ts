import { ElementWithSection } from "./ElementWithSection";
import { PageLogo } from "./PageLogo";
import { PageNavigation } from "./PageNavigation";
import { SearchInput } from "./SearchInput";

export class PageHeader extends ElementWithSection{
	public get ClassName(): string { return `PageHeader`; }
	private Logo: PageLogo;
	private Navigation: PageNavigation;
	private Search: SearchInput;

	public constructor() {
		super(`header`);
		this.Logo = new PageLogo();
		this.Navigation = new PageNavigation();
		this.Search = new SearchInput();

		this.Inner.append(
			this.Logo.RootHTMLElement,
			this.Navigation.RootHTMLElement,
			this.Search.RootHTMLElement
		);
	}
}