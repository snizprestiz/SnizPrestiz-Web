import { Element } from "./Element";

export class ElementWithSection extends Element{
	protected Inner: HTMLElement;

	public constructor(rootNodeType : string = "div") {
		super(rootNodeType);
		this.Inner = document.createElement("section");
		this.Root.append(this.Inner);
	}
}