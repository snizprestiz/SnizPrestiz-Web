import { Element } from "./Element";

export class InlineElement extends Element{
	protected get TagName(): string { return `span`; }
}
