import { PasswordInput } from "./PasswordInput";

export class SearchInput extends PasswordInput {
	protected get Type(): string { return `search`; }
}