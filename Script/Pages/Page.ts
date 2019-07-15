import { Element } from "../Elements/Basic/Element";

/**
 * Stránka webu. Ostatní stránky vycházejí z této třídy.
 */
export abstract class Page extends Element{
	/**
	 * Třída stránky, každá stránka má třídu *Page* a název stránky
	 *
	 * **Nepřepisovat, místo toho přepiš `Name`!**
	 */
	public get ClassName(): string { return `Page ${this.Name}`; }

	/**
	 * Název stránky.
	 * Každá stránka by tento atribut měla modifikovat.
	 */
	public get Name(): string { return ``; }

	/**
	 * Adresa stránky (bez počátečního a koncového lomítka).
	 * Každá stránka by tento atribut měla modifikovat.
	 */
	public get Path(): string { return ``; }

	/**
	 * Vyžádat znovunačtení URL. Má efekt pouze v kontruktoru.
	 */
	protected _LoadAgain: boolean = false;

	/**
	 * Flag zda stránka při načítání vyžádala znovunačtení URL
	 * (např. přesměrování při nepřihlášeném uživateli)
	 */
	public get LoadAgain(): boolean {
		return this._LoadAgain;
	}
}
