import { Element } from "./Element";

export class PageFooter extends Element{
	public constructor() {
		super("footer");

		this.Root.innerHTML = "\
			&copy; Jan Chaloupka, 2019<br>\
			<a href='https://github.com'>GitHub</a>,\
			<a href='https://github.com/issues'> Nahlásit chybu </a>\
		";
	}
}