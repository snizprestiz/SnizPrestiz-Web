import { Element } from "./Element";

/**
 * Obecný prvek značící hlavní čast
 *
 * ```html
 * <main>...</main>
 * ```
 */
export class Main extends Element{
	protected get TagName(): string { return `main`; }
}
