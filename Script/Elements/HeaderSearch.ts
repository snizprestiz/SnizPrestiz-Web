import { Form } from "./Basic/Input/Form";
import { SearchInput } from "./Basic/Input/SearchInput";
import { String } from "typescript-string-operations";

/**
 * Vyhledávání na stránce
 */
export class HeaderSearch extends Form{
	public get ClassName(): string { return `SearchInput`; }

	private Input: SearchInput;

	public constructor() {
		super();

		this.Input = new SearchInput(`query`);
		this.Input.Placeholder = `Hledat...`;
		this.Input.DOM.onkeyup = (): void => this.OnSearch(this.Input.Value);

		this.Children.push(
			this.Input/*,
			new SubmitButton(`\uf002`).Options(
				{ Tooltip: `Vyhledat` }
			)*/
		);
	}

	protected OnSubmit(data: FormData): void {
		this.Input.Value = String.Empty;
		this.OnSearch(data.get(`query`).toString());
	}

	/**
	 * Metoda, která se zevolá při zahájení vyhledávání
	 * @param query Vyhledávací řetězec
	 */
	private OnSearch(query: string): void{
		if (query == String.Empty) return;

		console.log(`Search: ${query}!`);
		// TODO Vyhledávání
	}
}
