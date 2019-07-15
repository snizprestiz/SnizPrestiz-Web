import { Element } from "./Basic/Element";
import { Page } from "../Pages/Page";
import { Observer } from "../Observer";

export class MainContent extends Element{
	public get TagName(): string { return `main`; }
	public get ClassName(): string { return `MainContent`; }

	public constructor() {
		super();
		Observer.RegisterPageChanged((curr): void => this.ChangePage(curr));
	}

	public ChangePage(curr: Page): void{
		this.Children.splice(0, this.Children.length);
		this.Children.push(curr);
	}
}