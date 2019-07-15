import { TextInput } from "./TextInput";

export class PasswordInput extends TextInput {
	protected get Type(): string { return `password`; }
}
