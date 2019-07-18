import { ElementOptions } from "../ElementOptions";

/**
 * Možnosti nastavení vstupního prvku. Používá metoda `Options()` třídy `Button`
 */
export interface ButtonOptions extends ElementOptions{
	/**
	 * Lze na tlačítko kliknout
	 */
	Enabled?: boolean;

	/**
	 * Jedná se o hlavní tlačítko
	 */
	Primary?: boolean;

	/**
	 * Tlačítko odešle data formuláře
	 */
	Submit?: boolean;

	/**
	 * Akce tlačítka je destruktivní (například smazání příspěvku)
	 */
	Destructive?: boolean;
}
