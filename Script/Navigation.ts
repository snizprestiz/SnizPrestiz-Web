import { Page } from "./Pages/Page";
import { Observer } from "./Observer";
import { PageFactory } from "./Pages/PageFactory";
import { String } from "typescript-string-operations";

/**
 * Navigace mezi stránkami
 */
export class Navigation{
	/**
	 * Inicializace navigace
	 */
	public static Initialize(): void {
		window.onpopstate = (): void => {
			this.ChangePage();
		};

		this.ChangePage();

		Observer.RegisterRequestPage((path): void => this.PageRequest(path));
	}

	/**
	 * Požadavek na změnu stránky
	 * @param path Nová adresa stránky
	 */
	private static PageRequest(path: string): void {
		history.pushState(null, null, path);
		this.ChangePage();
	}

	/**
	 * Aktuální instance stránky
	 */
	public static CurrentPage: Page = null;

	/**
	 * Titulek stránky (název stránky v záložce/záhlaví okna)
	 */
	public static set PageTitle(title: string) {
		document.title = `${(title == null || title == String.Empty) ? `` : `${title} :: `}Sniž prestiž`;
	}

	/**
	 * Změnit stránku podle URL adresy
	 */
	private static ChangePage(): void {
		let prevPage = this.CurrentPage;

		do {
			let path = location.pathname.replace(/\/$/, ``);
			this.CurrentPage = PageFactory.GetByPath(path);
		} while (this.CurrentPage.LoadAgain);

		console.log(`Navigated to: ${this.CurrentPage.Name}`);

		Observer.PageChanged(this.CurrentPage, prevPage);
	}
}
