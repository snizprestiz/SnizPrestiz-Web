import { GenericInput } from "./GenericInput";
import { CheckboxOptions } from "./CheckboxOptions";

/**
 * Zaškrtávácí políčko
 *
 * ```html
 * <input type="checkbox">
 * ```
 */
export class Checkbox extends GenericInput{
	protected get Type(): string { return `checkbox`; }

	/**
	 * Je políčko zaškrtnuté
	 */
	public get Checked(): boolean { return this.Root.checked; }
	public set Checked(v: boolean) {
		this.Root.checked = v;
	}

	public constructor(name?: string, value?: string, label?: string, required: boolean = false) {
		super(name, label, required);
		if (value) this.Value = name;
	}

	public Options(options: CheckboxOptions): this {
		super.Options(options);

		this.LabelWrapper.classList.add(`Checkbox`);

		if (options.Checked != null) this.Checked = options.Checked;
		return this;
	}
}
