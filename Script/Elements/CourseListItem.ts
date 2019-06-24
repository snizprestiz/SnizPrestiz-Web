import { Element } from "./Element";

export class CourseListItem extends Element{
	public get ClassName(): string { return `CourseListItem`; }
	private CodeHTML: HTMLElement;
	private NameHTML: HTMLElement;
	private ThreadCountHTML: HTMLElement;
	
	public get Code(): string{
		return `NaN`;
	}

	public set Code(v: string) {
		
	}
	
	public get Favourite(): boolean {
		return this.Root.classList.contains(`favourite`);
	}
	
	public set Favourite(v: boolean) {
		if(v)
			this.Root.classList.add(`favourite`);
		else
			this.Root.classList.remove(`favourite`);
	}

	public constructor() {
		super();

		this.CodeHTML = document.createElement(`div`);
		this.CodeHTML.classList.add(`code`);

		this.NameHTML = document.createElement(`div`);
		this.NameHTML.classList.add(`name`);

		this.ThreadCountHTML = document.createElement(`div`);
		this.ThreadCountHTML.classList.add(`threadCount`);

		this.Root.append(this.CodeHTML, this.NameHTML, this.ThreadCountHTML);
	}
}