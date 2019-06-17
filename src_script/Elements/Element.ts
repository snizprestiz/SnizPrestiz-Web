export class Element{
	protected Root: HTMLElement;
	
	public constructor(rootNodeType: string = "div") {
		this.Root = document.createElement(rootNodeType);
	}

	public get RootHTMLElement() : HTMLElement {
		return this.Root;
	}
}