import { String } from "typescript-string-operations";
import { Element } from "./Element";
import { Child } from "./Child";

export class WidthLimitedElement extends Element{
	protected Wrapper: HTMLElement;
	
	public get DOM(): HTMLElement {
		return this.Wrapper;
	}

	public constructor(...children: Child[]) {
		super(...children);
		this.Wrapper = document.createElement(`section`);
		this.Wrapper.append(this.Root);
		this.Wrapper.className = `WidthLimitedWrapper`;
		
		if (!String.IsNullOrWhiteSpace(this.ClassName))
			this.Wrapper.classList.add(`${this.ClassName}-wrapper`);
	}
}