import { GenericInput } from "./GenericInput";

/**
 * Tlačítko pro odeslání formuláře
 *
 * ```html
 * <input type="submit">
 * ```
 */
export class SubmitButton extends GenericInput{
	protected get Type(): string { return `submit`; }

	public constructor(value: string) {
		super();
		this.Value = value;
	}
}
