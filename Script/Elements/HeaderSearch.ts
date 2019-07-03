import { Form } from "./Basic/Form/Form";
import { SearchInput } from "./Basic/Form/SearchInput";
import { SubmitButton } from "./Basic/Form/SubmitButton";
import { String } from "typescript-string-operations";

export class HeaderSearch extends Form{
	public get ClassName(): string { return `SearchInput`; }

	private Input: SearchInput;
	private Submit: SubmitButton;

	public constructor() {
		super();
		
		this.Submit = new SubmitButton(`\uf002`);
		this.Submit.Tooltip = `Vyhledat`;
		
		this.Input = new SearchInput(`query`);
		this.Input.Placeholder = `Hledat...`;
		this.Input.DOM.onkeyup = (): void => this.Search(this.Input.Value);

		this.Children.push(this.Input, this.Submit);
	}

	protected SubmitEvent(data: FormData): void {
		this.Input.Value = String.Empty;
		this.Search(data.get(`query`).toString());
	}
	
	private Search(query: string): void{
		if (query == String.Empty) return;

		console.log(`Search: ${query}!`);
		// TODO Vyhledávání
	}
}