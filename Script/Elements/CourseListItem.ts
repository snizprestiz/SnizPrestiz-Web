import { Element } from "./Basic/Element";
import { CourseCode } from "./CourseCode";
import { Link } from "./Basic/Link";
import { Icon } from "./Basic/Icon";

/**
 * Položka seznamu předmětů
 */
export class CourseListItem extends Link{
	public get ClassName(): string { return `CourseListItem`; }

	private CodeElement: CourseCode;
	private SemesterElement: Element;
	private NameElement: Element;
	private PostsElement: Element;
	private FavouriteElement: Icon;

	/**
	 * Zkratka předmětu
	 */
	public get Code(): string {
		return this.CodeElement.Text;
	}

	public set Code(v: string) {
		this.CodeElement.Text = v;
	}

	/**
	 * Celý název předmětu
	 */
	public get Name(): string{
		return this.NameElement.Text;
	}

	public set Name(v: string) {
		this.NameElement.Text = v;
	}

	/**
	 * Počet příspěvků
	 */
	public get Posts(): number{
		return Number(this.PostsElement.Text);
	}

	public set Posts(v: number) {
		if (v == 0) this.Class.add(`empty`);
		else this.Class.remove(`empty`);
		this.PostsElement.Text = v.toString();
	}

	/**
	 * Je předmět mezi oblíbenými
	 */
	public get Favourite(): boolean {
		return this.Class.contains(`favourite`);
	}

	public set Favourite(v: boolean) {
		// TODO Fav API

		if (v) this.Class.add(`favourite`);
		else this.Class.remove(`favourite`);
	}

	/**
	 * Do kterého semestru předmět patří
	 */
	public get Semester(): string {
		return this.SemesterElement.Text;
	}

	public set Semester(v: string) {
		// TODO předělat na enum winter/summer
		this.SemesterElement.Text = v;
	}

	/**
	 * @param code Zkratka předmětu
	 * @param name Celý název předmětu
	 * @param semester Do kterého semestru předmět patří
	 * @param posts Počet příspěvků
	 * @param favourite Je předmět mezi oblíbenými
	 */
	public constructor(code: string, name: string, semester: string, posts: number = 0, favourite: boolean = false) {
		super(`/course/${code}`);

		this.CodeElement = new CourseCode();
		this.NameElement = new Element().Options({Class: `Name`});
		this.SemesterElement = new Element().Options({ Class: `Semester` });
		this.PostsElement = new Element().Options({ Class: `Threads` });
		this.FavouriteElement = new Icon(`star`);

		this.Children.push(
			this.CodeElement,
			this.NameElement,
			this.SemesterElement,
			this.PostsElement,
			this.FavouriteElement
		);

		this.Code = code;
		this.Name = name;
		this.Semester = semester;
		this.Favourite = favourite;
		this.Posts = posts;
	}
}
