import { Element } from "../Element";
import { InlineElement } from "../InlineElement";
import { GenericInput } from "./GenericInput";
import { String } from "typescript-string-operations";

export class Label extends Element{
	protected Root: HTMLLabelElement;
	protected get TagName(): string { return `label`; }

	private TextElement = new InlineElement();
	public get Text(): string { return this.TextElement.DOM.textContent; }
	public set Text(text: string) {
		this.TextElement.DOM.textContent = text;
	}

	private _LinkedInput;
	public get LinkedInput(): GenericInput | string { return this._LinkedInput; }
	public set LinkedInput(v: GenericInput | string) {
		if (this._LinkedInput instanceof GenericInput) {
			let i = this.Children.indexOf(this._LinkedInput);
			if (i >= 0) this.Children.splice(i, 1);
		} else this.Root.htmlFor = String.Empty;

		if (v instanceof GenericInput)
			this.Children.push(v);
		else this.Root.htmlFor = v;

		this._LinkedInput = v;
	}

	public constructor(text: string, input: GenericInput | string) {
		super();
		this.Children.push(this.TextElement);
		this.Text = text;
		this._LinkedInput = input;

		if (input instanceof GenericInput)
			this.Children.push(input);
		else
			this.Root.htmlFor = input;
	}
}
