import { Element } from "./Element";

/**
 * Paragraf, sekce textu
 *
 * ```html
 * <p>...</p>
 * ```
 */
export class Paragraph extends Element{
	protected get TagName(): string { return `p`; }
}
