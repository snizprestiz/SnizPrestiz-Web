import { Checkbox } from "./Checkbox";

/**
 * Přepínací políčko. Aby byly zaškrtávácí políčka ve skupině, musí mít stejný název a musí být ve stejném formuláři
 *
 * ```html
 * <input type="radio">
 * ```
 */
export class RadioButton extends Checkbox{
	protected get Type(): string { return `radio`; }

	public constructor(name?: string, value?: string, label?: string, required: boolean = false) {
		super(name, value, label, required);
	}
}
