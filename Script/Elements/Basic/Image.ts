import { Element } from "./Element";

/**
 * Obrázek
 *
 * ```html
 * <img src="">
 * ```
 */
export class Image extends Element{
	protected Root: HTMLImageElement;
	protected get TagName(): string { return `img`; }

	/**
	 * Adresa obrázku
	 */
	public get URL(): string {
		return this.Root.src;
	}

	public set URL(url: string) {
		this.Root.src = url;
	}

	public constructor(url: string) {
		super();

		if (url) this.URL = url;
	}
}
