import { Element } from "../Element";
import { InputOptions } from "./InputOptions";

/**
 * Obecný vstupní prvek.
 *
 * ```html
 * <label>
 * 	<span>...</span>
 * 	<input>
 * </label>
 * ```
 */
export abstract class GenericInput extends Element{
	protected Root: HTMLInputElement;
	protected LabelWrapper: HTMLLabelElement;
	private LabelText: HTMLElement;

	protected get TagName(): string { return `input`; }

	public get DOM(): HTMLElement { return this.LabelWrapper; }

	/**
	 * Typ vstupu
	 *
	 * Dědící třídy by měli upravit tento atribut
	 */
	protected get Type(): string { return `text`; }

	/**
	 * Je vyžadováno vyplnění tohoto prvku
	 */
	public get Required(): boolean { return this.Root.required; }
	public set Required(val: boolean) {
		this.Root.required = val;
	}

	/**
	 * Je tento vstup povolen
	 */
	public get Enabled(): boolean { return !this.Root.disabled; }
	public set Enabled(val: boolean) {
		this.Root.disabled = !val;
	}

	/**
	 * Je tento vstup jen pro čtení
	 */
	public get ReadOnly(): boolean { return this.Root.readOnly; }
	public set ReadOnly(val: boolean) {
		this.Root.readOnly = val;
	}

	/**
	 * Název vstupu, používáse při získávání dat z formuláře
	 */
	public get Name(): string { return this.Root.name; }
	public set Name(name: string) {
		this.Root.name = name;
	}

	/**
	 * Hodnota vstupu
	 */
	public get Value(): string { return this.Root.value; }
	public set Value(value: string) {
		this.Root.value = value;
	}

	/**
	 * Popis vstupu
	 */
	public get Label(): string { return this.LabelText.textContent; }
	public set Label(value: string) {
		this.LabelText.textContent = value;
	}

	public constructor(name?: string, label?: string, required: boolean = false) {
		super();
		this.LabelWrapper = document.createElement(`label`);
		this.LabelText = document.createElement(`span`);
		this.LabelWrapper.appendChild(this.Root);
		this.LabelWrapper.appendChild(this.LabelText);

		this.Root.type = this.Type;
		if (name) this.Name = name;
		if (label) this.Label = label;
		this.Required = required;
	}

	public Options(options: InputOptions): this {
		super.Options(options);
		if (options.Enabled != null) this.Enabled = options.Enabled;
		if (options.ReadOnly != null) this.ReadOnly = options.ReadOnly;
		return this;
	}
}
