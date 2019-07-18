import { ElementOptions } from "../ElementOptions";

/**
 * Možnosti nastavení vstupního prvku. Používá metoda `Options()` třídy `GenericInput`
 */
export interface InputOptions extends ElementOptions{
	/**
	 * Je tento vstup povolen
	 */
	Enabled?: boolean;

	Value?: string;
}
