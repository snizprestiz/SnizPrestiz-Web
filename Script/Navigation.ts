import { Page } from "./Pages/Page";
import { Observer } from "./Observer";
import { PageFactory } from "./Pages/PageFactory";

export class Navigation{
	public static Initialize(): void {
		window.onpopstate = (e): void => {
			this.ChangePage();
		};

		this.ChangePage();
	}

	public static Navigate(path: string): void {
		history.pushState(null, null, path);
		this.ChangePage();
	}

	public static CurrentPage: Page = null;

	private static ChangePage(): void {
		let prevPage = this.CurrentPage;

		this.CurrentPage = PageFactory.GetByPath(location.pathname.replace(/\/$/, ``));

		console.log(`Navigated to: ${this.CurrentPage.Name}`);

		Observer.UpdatePageChange(this.CurrentPage, prevPage);
	}
}