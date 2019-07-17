import { InputOptions } from "./InputOptions";

/**
 * Možnosti nastavení vstupního prvku. Používá metoda `Options()` třídy `TextInput`
 */
export interface TextInputOptions extends InputOptions{
	/**
	 * Je povoleno automatické vyplňování
	 */
	Autocomplete?: boolean;

	/**
	 * Dočasný text pole. Zobrazuje se pokud je pole prázdné
	 */
	Placeholder?: string;
}
