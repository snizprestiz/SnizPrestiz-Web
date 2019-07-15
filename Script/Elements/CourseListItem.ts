import { Element } from "./Basic/Element";
import { Abbreviation } from "./Abbreviation";
import { Link } from "./Basic/Link";
import { Icon } from "./Basic/Icon";

export class CourseListItem extends Link{
	public get ClassName(): string { return `CourseListItem`; }

	private AbbrElement: Abbreviation;
	private SemesterElement: Abbreviation;
	private NameElement: Element;
	private ThreadsElement: Element;
	private FavouriteElement: Icon;

	public get Abbr(): string {
		return this.AbbrElement.Text;
	}

	public set Abbr(v: string) {
		this.AbbrElement.Text = v;
	}

	public get Name(): string{
		return this.NameElement.Text;
	}

	public set Name(v: string) {
		this.NameElement.Text = v;
	}

	public get Threads(): number{
		return Number(this.ThreadsElement.Text);
	}

	public set Threads(v: number) {
		if (v == 0) this.Class.add(`empty`);
		else this.Class.remove(`empty`);
		this.ThreadsElement.Text = v.toString();
	}

	public get Favourite(): boolean {
		return this.Class.contains(`favourite`);
	}

	public set Favourite(v: boolean) {
		// TODO Fav API

		if (v) this.Class.add(`favourite`);
		else this.Class.remove(`favourite`);
	}

	public get Semester(): string {
		return this.SemesterElement.Text;
	}

	public set Semester(v: string) {
		// TODO předělat na enum winter/summer
		this.SemesterElement.Text = v;
	}

	public constructor(abbr: string, name: string, semester: string, threads: number = 0, favourite: boolean = false) {
		super(`/course/${abbr}`);

		this.AbbrElement = new Abbreviation();
		this.NameElement = new Element().Options({Class: `Name`});
		this.SemesterElement = new Element().Options({ Class: `Semester` });
		this.ThreadsElement = new Element().Options({ Class: `Threads` });
		this.FavouriteElement = new Icon(`star`);

		this.Children.push(
			this.AbbrElement,
			this.NameElement,
			this.SemesterElement,
			this.ThreadsElement,
			this.FavouriteElement
		);

		this.Abbr = abbr;
		this.Name = name;
		this.Semester = semester;
		this.Favourite = favourite;
		this.Threads = threads;
	}
}
