import { Element } from "../Element";

export class GenericInput extends Element{
	protected Root: HTMLInputElement;
	protected get TagName(): string { return `input`; }
	protected get Type(): string { return `text`; }
	
	public get Required(): boolean { return this.Root.required; }
	public set Required(val: boolean) {
		this.Root.required = val;
	}

	public get Enabled(): boolean { return !this.Root.disabled; }
	public set Enabled(val: boolean) {
		this.Root.disabled = !val;
	}

	public get ReadOnly(): boolean { return this.Root.readOnly; }
	public set ReadOnly(val: boolean) {
		this.Root.readOnly = val;
	}

	public get Name(): string { return this.Root.name; }
	public set Name(name: string) {
		this.Root.name = name;
	}

	public get Value(): string { return this.Root.value; }
	public set Value(value: string) {
		this.Root.value = value;
	}

	public constructor(name?: string, required: boolean = false) {
		super();
		this.Root.type = this.Type;
		if (name) this.Root.name = name;
		this.Required = required;
	}
}