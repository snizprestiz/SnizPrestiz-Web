import { Page } from "./Page";
import { AllCourses } from "./AllCourses";
import { Course } from "./Course";
import { Unknown } from "./Unknown";

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

	public static GetByPath(path: string): Page{
		let match: RegExpMatchArray;

		if ((match = path.match(this.PatternAllCourses)) != null) {
			return new AllCourses();
		} else if ((match = path.match(this.PatternCourse)) != null) {
			return new Course(match[1]);
		/*} else if ((match = path.match(this.PatternCourseStats)) != null) {
		
		} else if ((match = path.match(this.PatternThread)) != null) {
		
		} else if ((match = path.match(this.PatternNewThread)) != null) {
		
		} else if ((match = path.match(this.PatternSearch)) != null) {
		
		} else if ((match = path.match(this.PatternLogin)) != null) {
		
		} else if ((match = path.match(this.PatternRegister)) != null) {
		
		} else if ((match = path.match(this.PatternAccount)) != null) {
		*/
		}

		return new Unknown();
	}
}