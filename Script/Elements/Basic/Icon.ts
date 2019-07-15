import { Element } from "./Element";
import { IconType } from "./IconType";

export class Icon extends Element{
	protected get TagName(): string { return `i`; }

	private _Name: string;
	public get Name(): string { return this._Name; }
	public set Name(name: string) {
		this._Name = name;
		this.SetClassName();
	}

	private _Type: IconType;
	public get Type(): IconType { return this._Type; }
	public set Type(type: IconType) {
		this._Type = type;
		this.SetClassName();
	}

	public constructor(name: string, type: IconType = IconType.Regular) {
		super();
		this._Name = name;
		this._Type = type;
		this.SetClassName();
	}

	private SetClassName(): void {
		this.Root.className = `${this.Type} fa-${this.Name}`;
	}
}
