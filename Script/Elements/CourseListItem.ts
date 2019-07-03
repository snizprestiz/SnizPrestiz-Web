import { Element } from "./Basic/Element";

export class CourseListItem extends Element{
	public get ClassName(): string { return `CourseListItem`; }

	private AbbrElement: Element;
	private NameElement: Element;
	private ThreadsElement: Element;
	
	public get Abbr(): string {
		return `NaN`;
	}

	public set Abbr(v: string) {
		
	}

	public get Name(): string{
		return `NaN`;
	}

	public set Name(v: string) {
		
	}
	
	public get Favourite(): boolean {
		return this.Root.classList.contains(`favourite`);
	}
	
	public set Favourite(v: boolean) {
		// TODO Fav API

		if (v)
			this.Root.classList.add(`favourite`);
		else
			this.Root.classList.remove(`favourite`);
	}

	public constructor() {
		super();

		this.AbbrElement = new Element();
		this.AbbrElement.DOM.className = `code`;

		this.NameElement = new Element();
		this.NameElement.DOM.className = `name`;

		this.ThreadsElement = new Element();
		this.ThreadsElement.DOM.className = `threadCount`;

		this.Children.push(
			this.AbbrElement,
			this.NameElement,
			this.ThreadsElement
		);
	}
}