import { Page } from "./Pages/Page";

export class Observer{
	private static RequestPageCallback: ((path: string) => void)[] = [];

	public static RequestPage(path: string): void{
		this.RequestPageCallback.forEach((func): void => func(path));
	}

	public static RegisterRequestPage(func: (path: string) => void): void {
		this.RequestPageCallback.push(func);
	}

	private static PageChangedCallback: ((curr: Page, prev: Page) => void)[] = [];

	public static PageChanged(curr: Page, prev: Page): void{
		this.PageChangedCallback.forEach((func): void => func(curr, prev));
	}

	public static RegisterPageChanged(func: (curr: Page, prev: Page) => void): void {
		this.PageChangedCallback.push(func);
	}

	private static LoginChangeCallback: (() => void)[] = [];

	public static LoginChange(): void{
		this.LoginChangeCallback.forEach((func): void => func());
	}

	public static RegisterLoginChange(func: () => void): void {
		this.LoginChangeCallback.push(func);
	}
}
