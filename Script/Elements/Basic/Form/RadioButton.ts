import { Checkbox } from "./Checkbox";

export class RadioButton extends Checkbox{
	protected get Type(): string { return `radio`; }
}