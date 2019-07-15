import { Element } from "./Element";
import { HeadingLevel } from "./HeadingLevel";
import { Child } from "./Child";

export class Heading extends Element{
	public get Level(): HeadingLevel{
		return HeadingLevel[this.Root.tagName];
	}

	public constructor(level: HeadingLevel, ...children: Child[]) {
		super(...children);
		this.Root.remove();
		this.Root = document.createElement(level);
		this.Children.push(...children);
	}
}
