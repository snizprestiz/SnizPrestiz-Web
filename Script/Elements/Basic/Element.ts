import { Child } from "./Child";

export class Element{
	protected Root: HTMLElement;
	private _Children: Child[] = [];
	public Children: Child[];

	public get ClassName(): string { return ``; }
	protected get TagName(): string { return `div`; }

	public get DOM(): HTMLElement {
		return this.Root;
	}
	
	public get ID(): string { return this.Root.id; }
	public set ID(id: string) {
		this.Root.id = id;
	}

	public get Tooltip(): string { return this.Root.title; }
	public set Tooltip(text: string) {
		this.Root.title = text;
	}

	public get Text(): string { return this.Root.textContent; }
	public set Text(text: string) {
		this.Children.splice(0, this.Children.length);
		this.Children.push(text);
	}
	
	public constructor(...children: Child[]) {
		this.Root = document.createElement(this.TagName);
		this.Root.className = this.ClassName;
		
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
}