import { Element } from "./Element";

export class PageFooter extends Element{
	public get ClassName(): string { return `PageFooter`; }
	public constructor() {
		super(`footer`);

		this.Root.innerHTML = `
			Sniž prestiž, 2019<br>
			<a href='https://github.com'>GitHub</a>,
			<a href='https://github.com/issues'>Issue Tracker</a>
			`;
	}
}