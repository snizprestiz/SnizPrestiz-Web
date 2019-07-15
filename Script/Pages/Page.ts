import { Element } from "../Elements/Basic/Element";

export class Page extends Element{
	public get ClassName(): string { return `Page ${this.Name}`; }
	public get Name(): string { return ``; }

	protected _LoadAgain: boolean = false;
	public get LoadAgain(): boolean {
		return this._LoadAgain;
	}

	public PageChange(): void{

	}
}
