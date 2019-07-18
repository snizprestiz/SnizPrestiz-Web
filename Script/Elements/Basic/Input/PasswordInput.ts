import { TextInput } from "./TextInput";

/**
 * Pole pro psaní hesla. Maskuje napsaný text
 *
 * ```html
 * <input type="password">
 * ```
 */
export class PasswordInput extends TextInput {
	protected get Type(): string { return `password`; }
}
