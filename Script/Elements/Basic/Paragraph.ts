import { Element } from "./Element";

export class Paragraph extends Element{
	protected get TagName(): string { return `p`; }
}
