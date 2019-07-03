import { GenericInput } from "./GenericInput";

export class Checkbox extends GenericInput{
	protected get Type(): string { return `checkbox`; }

	public get Checked(): boolean { return this.Root.checked; }
	public set Checked(v: boolean) {
		this.Root.checked = v;
	}
}