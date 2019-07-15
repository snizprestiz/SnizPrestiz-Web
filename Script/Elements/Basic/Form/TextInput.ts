import { GenericInput } from "./GenericInput";

/**
 * Textové pole
 *
 * ```html
 * <input type="text">
 * ```
 */
export class TextInput extends GenericInput {
	/**
	 * Je povoleno autometické vyplňování
	 */
	public get Autocomplete(): boolean {
		return !(this.Root.autocomplete == `off`);
	}

	public set Autocomplete(v: boolean) {
		this.Root.autocomplete = v ? `on` : `off`;
	}

	/**
	 * Dočasný text pole. Zobrazuje se pokud je pole prázdné
	 */
	public get Placeholder(): string {
		return this.Root.placeholder;
	}

	public set Placeholder(text: string) {
		this.Root.placeholder = text;
	}
}
