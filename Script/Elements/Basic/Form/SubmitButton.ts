import { GenericInput } from "./GenericInput";

export class SubmitButton extends GenericInput{
	protected get Type(): string { return `submit`; }

	public constructor(value: string) {
		super();
		this.Value = value;
	}
}