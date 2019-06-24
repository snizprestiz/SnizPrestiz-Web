import { Key } from "ts-keycode-enum";
import { Element } from "./Element";

export class SearchInput extends Element{
	public get ClassName(): string { return `SearchInput`; }
	private Input: HTMLInputElement;
	private Submit: HTMLElement;

	public constructor() {
		super();
		
		this.Submit = document.createElement(`i`);
		this.Submit.className = `far fa-search`;
		this.Submit.title = `Vyhledat`;
		this.Submit.addEventListener(`click`, this.Search.bind(this));

		this.Input = document.createElement(`input`);
		this.Input.type = `search`;
		this.Input.placeholder = `Hledat...`;
		this.Input.addEventListener(`keyup`, (e): void => {
			if (e.keyCode != Key.Enter) return;
			e.preventDefault();
			this.Submit.click();
		});

		this.Root.classList.add(`searchInputContainer`);
		this.Root.append(this.Input, this.Submit);
	}

	private Search(): void {
		console.log(`Begin search!`);
		// TODO Vyhledávání
	}
}