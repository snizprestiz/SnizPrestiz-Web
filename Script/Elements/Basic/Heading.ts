import { Element } from "./Element";
import { HeadingLevel } from "./HeadingLevel";
import { Child } from "./Child";

/**
 * Nadpis sekce
 *
 * ```html
 * <h*>...</h*>
 * ```
 */
export class Heading extends Element{
	/**
	 * Úroveň nadpisu
	 */
	public get Level(): HeadingLevel{
		return HeadingLevel[this.Root.tagName];
	}

	/**
	 * @param level Úroveň nadpisu
	 */
	public constructor(level: HeadingLevel, ...children: Child[]) {
		super(...children);
		this.Root.remove();
		this.Root = document.createElement(level);
		this.Children.push(...children);
	}
}
