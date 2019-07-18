import { Icon } from './../Icon';
import { Button } from './Button';
import { TextInput } from "./TextInput";

/**
 * Vyhledávací pole. Podobné textovámu poli
 *
 * ```html
 * <input type="search">
 * ```
 */
export class SearchInput extends TextInput {
	protected get Type(): string { return `search`; }

	public get Label(): string {
		return this.Placeholder;
	}

	public set Label(v: string) {
		this.Placeholder = v;
	}

	public constructor(name?: string, label?: string, required: boolean = false, includeButton: boolean = false) {
		super(name, label, required);
		this.Autocomplete = false;

		if (includeButton) {
			this.LabelWrapper.appendChild(
				new Button(
					{ Submit: true, Secondary: true, Tooltip: `Vyhledat` },
					new Icon(`search`)
				).DOM
			);
		}
	}
}
