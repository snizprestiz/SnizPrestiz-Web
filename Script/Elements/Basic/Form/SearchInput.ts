import { TextInput } from "./TextInput";

export class SearchInput extends TextInput {
	protected get Type(): string { return `search`; }

	public constructor(name?: string, required: boolean = false) {
		super(name, required);
		this.Autocomplete = false;
	}
}