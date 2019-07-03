import { GenericInput } from "./GenericInput";

export class TextInput extends GenericInput {
	public get Placeholder(): string {
		return this.Root.placeholder;
	}

	public set Placeholder(text: string) {
		this.Root.placeholder = text;
	}
}