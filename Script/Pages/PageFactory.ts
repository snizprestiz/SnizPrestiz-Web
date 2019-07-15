import { Page } from "./Page";
import { AllCourses } from "./AllCourses";
import { Course } from "./Course";
import { Unknown } from "./Unknown";
import { Login } from "./Login";
import { Register } from "./Register";
import { String } from "typescript-string-operations";
import { About } from "./About";

export class PageFactory{
	private static PatternAllCourses: RegExp = /^\/all-courses$/i;
	private static PatternCourse: RegExp = /^\/course\/([^\/]+)$/i;
	private static PatternCourseStats: RegExp = /^\/course\/([^\/]+)\/stats$/i;
	private static PatternThread: RegExp = /^\/course\/([^\/]+)\/thread\/(\d+)$/i;
	private static PatternNewThread: RegExp = /^\/course\/([^\/]+)\/new-thread$/i;
	private static PatternSearch: RegExp = /^\/search(\/([^\/]+))?$/i;
	private static PatternLogin: RegExp = /^\/login$/i;
	private static PatternRegister: RegExp = /^\/register$/i;
	private static PatternAccount: RegExp = /^\/account$/i;

	/**
	 * Vrátí objekt stránky podle cesty
	 * @param path Cesta ke stránce, např. /login (bez koncového lomítka)
	 */
	public static GetByPath(path: string): Page{
		let match: RegExpMatchArray;

		if ((match = path.match(this.PatternAllCourses)) != null)
			return new AllCourses();
		else if ((match = path.match(this.PatternCourse)) != null)
			return new Course(match[1]);
		/* else if ((match = path.match(this.PatternCourseStats)) != null)

		else if ((match = path.match(this.PatternThread)) != null)

		else if ((match = path.match(this.PatternNewThread)) != null)

		else if ((match = path.match(this.PatternSearch)) != null)
		*/
		else if ((match = path.match(this.PatternLogin)) != null)
			return new Login();
		else if ((match = path.match(this.PatternRegister)) != null)
			return new Register();
		// else if ((match = path.match(this.PatternAccount)) != null)
		else if (path == String.Empty)
			return new About();

		return new Unknown();
	}
}
