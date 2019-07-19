import { GenericInput } from "./GenericInput";
import { TextInputOptions } from "./TextInputOptions";

/**
 * Textové pole
 *
 * ```html
 * <input type="text">
 * ```
 */
export class TextInput extends GenericInput {
	/**
	 * Je povoleno automatické vyplňování
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

	/**
	 * Je tento vstup jen pro čtení
	 */
	public get ReadOnly(): boolean {
		return this.Root.readOnly;
	}

	public set ReadOnly(val: boolean) {
		this.Root.readOnly = val;
	}

	public constructor(name?: string, label?: string, required?: boolean) {
		super(name, label, required);
		this.LabelWrapper.classList.add(`TextInput`);
	}

	public Options(options: TextInputOptions): this {
		super.Options(options);

		if (options.Placeholder != null) this.Placeholder = options.Placeholder;
		if (options.Autocomplete != null) this.Autocomplete = options.Autocomplete;
		if (options.ReadOnly != null) this.ReadOnly = options.ReadOnly;
		return this;
	}
}
