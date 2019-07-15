import { Element } from "./Element";

/**
 * Obecná patička
 *
 * ```html
 * <footer>...</footer>
 * ```
 */
export class Footer extends Element{
	protected get TagName(): string { return `footer`; }
}
