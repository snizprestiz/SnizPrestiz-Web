import { PageLogo } from "./PageLogo";
import { PageNavigation } from "./PageNavigation";
import { HeaderSearch } from "./HeaderSearch";
import { WidthLimitedElement } from "./Basic/WidthLimitedElement";

export class PageHeader extends WidthLimitedElement{
	protected get TagName(): string { return `header`; }
	public get ClassName(): string { return `PageHeader`; }

	public constructor() {
		super(
			new PageLogo(),
			new PageNavigation(),
			new HeaderSearch()
		);
	}
}