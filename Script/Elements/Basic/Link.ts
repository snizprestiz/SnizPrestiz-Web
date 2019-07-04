import { LinkTarget } from "./LinkTarget";
import { Element } from "./Element";
import { Child } from "./Child";
import { Navigation } from "../../Navigation";
import { Observer } from "../../Observer";

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
		if (this.Root.target == `_self`)
			return LinkTarget.Current;
		else if (this.Root.target == `_blank`)
			return LinkTarget.NewTab;
		return LinkTarget.Default;
	}

	public set Target(target: LinkTarget) {
		if (target == LinkTarget.Current)
			this.Root.target = `_self`;
		else if (target == LinkTarget.NewTab)
			this.Root.target = `_blank`;
		else
			this.Root.target = ``;
	}
	
	public constructor(url: string, ...children: Child[]);
	public constructor(url: string, target: LinkTarget, ...children: Child[]);
	public constructor(url: string, target?: LinkTarget | Child, ...children: Child[]) {
		super();

		this.Root.onclick = (e): void => this.NavigateEvent(e);
		if (url) this.URL = url;

		if (typeof target == `number`) {
			this.Target = target;
		} else if (target != null) {
			this.Children.push(target);
		}

		this.Children.push(...children);
	}
		
	private NavigateEvent(e: MouseEvent): void {
		if (this.Root.hostname != location.hostname && !!this.Root.hostname.length)
			return;
		
		e.preventDefault();
		Observer.RequestPage(this.Root.pathname);
	}
}