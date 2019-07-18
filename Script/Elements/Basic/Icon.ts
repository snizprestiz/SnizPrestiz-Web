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

	private _Spinner: boolean;

	public get Spinner(): boolean { return this._Spinner; }
	public set Spinner(v: boolean) {
		this._Spinner = v;
		this.SetClassName();
	}

	/**
	 * @param name Název ikony bez prefixu "fa-" (př. "bow-arrow")
	 * @param type Styl ikony - výchozí typ je Regular
	 * @param spinner Má se ikona otáčet (ukazatel načítání)
	 */
	public constructor(name: string, type: IconType = IconType.Regular, spinner: boolean = false) {
		super();
		this._Name = name;
		this._Type = type;
		this._Spinner = spinner;
		this.SetClassName();
	}

	private SetClassName(): void {
		this.Root.className = `${this.Type} fa-${this.Name}${this.Spinner ? ` fa-spin`: ``}`;
	}
}
