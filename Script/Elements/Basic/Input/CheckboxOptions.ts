import { InputOptions } from "./InputOptions";

/**
 * Možnosti nastavení vstupního prvku. Používá metoda `Options()` třídy `Checkbox`
 */
export interface CheckboxOptions extends InputOptions{
	/**
	 * Je políčko zaškrtnuté
	 */
	Checked?: boolean;
}
