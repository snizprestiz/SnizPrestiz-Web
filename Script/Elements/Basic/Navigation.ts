import { Element } from "./Element";

/**
 * Obecní prvek značící navigaci.
 *
 * ```html
 * <nav>...</nav>
 * ```
 */
export class Navigation extends Element{
	protected get TagName(): string { return `nav`; }
}
