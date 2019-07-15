import { Element } from "./Element";
import { IconType } from "./IconType";

/**
 * FontAwesome ikona
 *
 * ```html
 * <i class="fa-*">...</i>
 * ```
 */
export class Icon extends Element{
	protected get TagName(): string { return `i`; }

	private _Name: string;
	/**
	 * Název ikony bez prefixu "fa-" (př. "bow-arrow")
	 *
	 * [Seznam ikon](https://fontawesome.com/icons)
	 */
	public get Name(): string { return this._Name; }
	public set Name(name: string) {
		this._Name = name;
		this.SetClassName();
	}

	private _Type: IconType;
	/**
	 * Styl ikony. Výchozí typ je Regular
	 */
	public get Type(): IconType { return this._Type; }
	public set Type(type: IconType) {
		this._Type = type;
		this.SetClassName();
	}

	/**
	 * @param name Název ikony bez prefixu "fa-" (př. "bow-arrow")
	 * @param type Styl ikony - výchozí typ je Regular
	 */
	public constructor(name: string, type: IconType = IconType.Regular) {
		super();
		this._Name = name;
		this._Type = type;
		this.SetClassName();
	}

	private SetClassName(): void {
		this.Root.className = `${this.Type} fa-${this.Name}`;
	}
}
