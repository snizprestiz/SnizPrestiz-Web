import { Child } from "../Child";
import { Element } from "../Element";

/**
 * Formulář
 *
 * ```html
 * <form>...</form>
 * ```
 */
export class Form extends Element{
	protected Root: HTMLFormElement;
	protected get TagName(): string { return `form`; }

	public constructor(...children: Child[]) {
		super(...children);
		this.Root.onsubmit = (e): void => {
			e.preventDefault();
			this.OnSubmit(new FormData(this.Root));
		};
	}

	/**
	 * Metoda, která se vykoná při odeslání formuláře
	 * @param data Data formuláře
	 */
	protected OnSubmit(data: FormData): void {

	}
}
