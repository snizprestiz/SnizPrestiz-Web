import { Child } from "../Child";
import { Element } from "../Element";

export class Form extends Element{
	protected Root: HTMLFormElement;
	protected get TagName(): string { return `form`; }

	public constructor(...children: Child[]) {
		super(...children);
		this.Root.onsubmit = (e): void => {
			e.preventDefault();
			this.SubmitEvent(new FormData(this.Root));
		};
	}

	protected SubmitEvent(data: FormData): void {

	}
}
