import { LinkTarget } from "./LinkTarget";
import { Element } from "./Element";
import { Child } from "./Child";

export class Link extends Element{
	protected Root: HTMLAnchorElement;
	protected get TagName(): string { return `a`; }

	public get URL(): string {
		return this.Root.href;
	}

	public set URL(url: string) {
		this.Root.href = url;
	}
	
	public get Target(): LinkTarget {
		return LinkTarget[this.Root.target];
	}

	public set Target(target: LinkTarget) {
		this.Root.target = target;
	}
	
	public constructor(url: string, ...children: Child[])
	public constructor(url: string, target: LinkTarget = LinkTarget.Default, ...children: Child[]) {
		super(...children);
		this.Root.target = target;
		if(url) this.URL = url;
	}
}