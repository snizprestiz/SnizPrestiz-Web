import { Element } from "./Element";

/**
 * Obecný řádkový element
 *
 * ```html
 * <span>...</span>
 * ```
 */
export class InlineElement extends Element{
	protected get TagName(): string { return `span`; }
}
