import { TextInput } from "./TextInput";

/**
 * Vyhledávací pole. Podobné textovámu poli
 *
 * ```html
 * <input type="search">
 * ```
 */
export class SearchInput extends TextInput {
	protected get Type(): string { return `search`; }

	public get Label(): string {
		return this.Placeholder;
	}

	public set Label(v: string) {
		this.Placeholder = v;
	}

	public constructor(name?: string, label?: string, required: boolean = false) {
		super(name, label, required);
		this.Autocomplete = false;
	}
}
