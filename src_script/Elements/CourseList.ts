import { Element } from "./Element";

export class CourseList extends Element{
	private Header: HTMLElement;
	private MyCoursesContainer: HTMLElement;
	private AllCoursesContainer: HTMLElement;
	private MyCourses: any;
	private AllCourses: any;

	public constructor() {
		super();
		
		this.Header = document.createElement("header");
		this.Header.innerHTML = "<h1>Seznam předmětů</h1><p>Hello World!</p>";
		
		this.MyCoursesContainer = document.createElement("div");
		this.MyCoursesContainer.classList.add("coursesContainer", "myCourses");
		
		this.AllCoursesContainer = document.createElement("div");
		this.AllCoursesContainer.classList.add("coursesContainer", "allCourses");
		
		this.Root.classList.add("courseList");
		this.Root.append(this.Header);
		this.Root.insertAdjacentHTML("beforeend", "<h2>Moje předměty</h2>");
		this.Root.append(this.MyCoursesContainer);
		this.Root.insertAdjacentHTML("beforeend", "<h2>Všechny předměty</h2>");
		this.Root.append(this.AllCoursesContainer);
	}
}