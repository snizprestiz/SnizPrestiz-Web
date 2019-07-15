import { Child } from "./Child";
import { ElementOptions } from "./ElementOptions";
import { String } from "typescript-string-operations";

/**
 * Základní element
 *
 * ```html
 * <div>...</div>
 * ```
 */
export class Element{
	protected Root: HTMLElement;
	private _Children: Child[] = [];
	/**
	 * Potomci elementu, může být text nebo další element
	 */
	public Children: Child[];

	/**
	 * Třídní jméno elementu.
	 * Potomci by měli tento atribut přepsat.
	 */
	public get ClassName(): string { return ``; }

	/**
	 * Potomek může tento atribut přepsat, pokud chce při vytvoření použít jiný HTML prvek.
	 */
	protected get TagName(): string { return `div`; }

	/**
	 * DOM reprezentace tohoto prvku.
	 */
	public get DOM(): HTMLElement {
		return this.Root;
	}

	/**
	 * ID prvku v DOMu
	 */
	public get ID(): string { return this.Root.id; }
	public set ID(id: string) {
		this.Root.id = id;
	}

	/**
	 * Pomocný text zobrazený při najetí myší na tento prvek
	 */
	public get Tooltip(): string { return this.Root.title; }
	public set Tooltip(text: string) {
		this.Root.title = text;
	}

	/**
	 * Vrátí nabo nastaví text uvnitř prvku
	 *
	 * Při nastavení textu jsou veškeří potomci odstraněni
	 */
	public get Text(): string { return this.Root.textContent; }
	public set Text(text: string) {
		this.Children.splice(0, this.Children.length);
		this.Children.push(text);
	}

	/**
	 * Zpřístupnení DOM metody `classList`. Umožňuje modifikovat třídy prvku
	 */
	public get Class(): DOMTokenList { return this.Root.classList; }

	public constructor(...children: Child[]) {
		this.Root = document.createElement(this.TagName);
		if(this.ClassName != String.Empty)
			this.Root.className = this.ClassName;

		// Proxy aby se při modifikaci seznamu tato změna projevila i v DOMu
		this.Children = new Proxy(this._Children, {
			deleteProperty: (target, property): boolean => {
				let index = Number(property);

				if (index != NaN && this.Root.children.length > index)
					this.Root.removeChild(this.Root.childNodes[index]);

				return true;
			},
			set: (target, property, value): boolean => {
				target[property] = value;

				let index = Number(property);
				if (index == NaN) return true;

				let node: Node;
				if (typeof value == `string`) node = document.createTextNode(value);
				else if (value instanceof Element) node = value.DOM;
				else return true;

				if (this.Root.childNodes.length > index)
					this.Root.replaceChild(node, this.Root.childNodes[index]);
				else
					this.Root.appendChild(node);

				return true;
			}
		});

		this.Children.push(...children);
	}

	/**
	 * Metoda která umožňuje při vytváření prvku modifikovat některé jeho vlastnosti
	 *
	 * Příklad použití: `let e = new Element("Hello World").Options({Tooltip: "Greeting"});`
	 * @param options Vlastnosti prvku
	 */
	public Options(options: ElementOptions): this {
		if (options.Class) this.Class.add(...options.Class.split(` `));
		if (options.ID) this.ID = options.ID;
		if (options.Tooltip) this.Tooltip = options.Tooltip;

		return this;
	}
}
