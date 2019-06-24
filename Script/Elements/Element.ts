export class Element{
	protected Root: HTMLElement;
	
	public constructor(rootNodeType: string = `div`) {
		this.Root = document.createElement(rootNodeType);
		this.Root.className = this.ClassName;
	}

	
	public get ClassName(): string {
		return ``;
	}

	public get RootHTMLElement(): HTMLElement {
		return this.Root;
	}
}