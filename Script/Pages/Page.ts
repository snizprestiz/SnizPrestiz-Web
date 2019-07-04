import { Element } from "../Elements/Basic/Element";

export class Page{
	public get Name(): string { return `Page`; }

	protected _LoadAgain: boolean = false;
	public get LoadAgain(): boolean {
		return this._LoadAgain;
	}
	

	protected RootElement: Element = null;

	public get Main(): Element { return this.RootElement; }
}