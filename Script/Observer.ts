import { Page } from "./Pages/Page";

export class Observer{
	private static PageChange: ((curr: Page, prev: Page) => void)[] = [];

	public static UpdatePageChange(curr: Page, prev: Page): void{
		this.PageChange.forEach((func): void => func(curr, prev));
	}
	
	public static RegisterPageChange(func: (curr: Page, prev: Page) => void): void {
		this.PageChange.push(func);
	}
}