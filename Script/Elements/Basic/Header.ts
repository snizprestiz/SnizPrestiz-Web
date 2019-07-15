import { Element } from "./Element";

/**
 * Obecná hlavička
 *
 * ```html
 * <header>...</header>
 * ```
 */
export class Header extends Element{
	protected get TagName(): string { return `header`; }
}
