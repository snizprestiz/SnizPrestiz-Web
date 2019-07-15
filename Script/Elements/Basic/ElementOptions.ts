/**
 * Možnosti nastavení prvku. Používá metoda `Options()` třídy `Element`
 */
export interface ElementOptions{
	/**
	 * Třída/y prvku
	 */
	Class?: string;

	/**
	 * Pomocný text zobrazený při najetí myší na tento prvek
	 */
	Tooltip?: string;

	/**
	 * ID prvku v DOMu
	 */
	ID?: string;
}
