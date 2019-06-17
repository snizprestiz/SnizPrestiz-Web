import { Key } from "ts-keycode-enum";
import { Element } from "./Element";

export class SearchInput extends Element{
	private Input: HTMLInputElement;
	private Submit: HTMLElement;

	public constructor() {
		super();
		
		this.Submit = document.createElement("i");
		this.Submit.classList.add("far", "fa-search");
		this.Submit.title = "Vyhledat";
		this.Submit.addEventListener("click", this.Search.bind(this));

		this.Input = document.createElement("input");
		this.Input.type = "search";
		this.Input.placeholder = "Hledat...";
		this.Input.addEventListener("keyup", (e) => {
			if (e.keyCode != Key.Enter) return;
			e.preventDefault();
			this.Submit.click();
		})

		this.Root.classList.add("searchInputContainer");
		this.Root.append(this.Input, this.Submit);
	}

	private Search() {
		console.log("Begin search!");
		// TODO Vyhledávání
	}
}