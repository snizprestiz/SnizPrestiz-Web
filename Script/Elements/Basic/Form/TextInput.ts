import { GenericInput } from "./GenericInput";

export class TextInput extends GenericInput {
	public get Autocomplete(): boolean {
		return !(this.Root.autocomplete == `off`);
	}

	public set Autocomplete(v: boolean) {
		this.Root.autocomplete = v ? `on` : `off`;
	}
	
	public get Placeholder(): string {
		return this.Root.placeholder;
	}

	public set Placeholder(text: string) {
		this.Root.placeholder = text;
	}
}