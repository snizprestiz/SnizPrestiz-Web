import { Element } from "../Elements/Basic/Element";

export class Page{
	public get Name(): string { return `Page`; }

	protected RootElement: Element = null;

	public get Main(): Element { return this.RootElement; }
}