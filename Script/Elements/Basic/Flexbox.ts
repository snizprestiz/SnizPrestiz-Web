import { Element } from "./Element";

/**
 * Obecný prvek s flexbox stylem
 *
 * ```html
 * <div style="display: flex">...</main>
 * ```
 */
export class Flexbox extends Element{
	public get ClassName(): string { return `Flexbox`; }
}
