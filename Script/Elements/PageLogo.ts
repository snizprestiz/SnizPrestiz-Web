import { Link } from "./Basic/Link";
import { String } from "typescript-string-operations";

export class PageLogo extends Link{
	public get ClassName(): string { return `PageLogo`; };
	
	public static AnimationInitialDelay = 800;
	public static AvailableTexts = [
		`prestiz--;`,
		`dec [prestiz]`,
		`sub [prestiz] 1`,
		`prestiz -= 1;`,
		`prestiz -= true;`,
		`$prestiz--;`,
		`--prestiz;`,
		`let "prestiz--"`,
		`(decf prestiz)`,
		`(- prestiz 1)`,
		`prestiz <= prestiz - 1;`,
		`prestiz += 0xFFFFFFFF;`
	];

	private FinalText: string;
	private CharsDisplayed: number;

	public constructor() {
		super(`/`);
		this.Tooltip = `Sniž prestiž`;
	}
	
	public get DOM(): HTMLElement {
		if (document.referrer == String.Empty ||
			new URL(document.referrer).hostname != location.hostname)
			this.AnimateLogo();
		else this.ShowWithoutAnimation();
		return this.Root;
	}

	private ShowWithoutAnimation(): void {
		let text: string = localStorage.getItem(`LastAnimationIndex`);
		if (text != null) text = PageLogo.AvailableTexts[Number(text)];
		if(text == null)
			text = PageLogo.AvailableTexts[Math.floor(Math.random() * PageLogo.AvailableTexts.length)];
		
		this.Text = text;
		this.Class.add(`finished`, `skip-animation`);
	}
	
	public AnimateLogo(): void {
		let randomIndex = Math.floor(Math.random() * PageLogo.AvailableTexts.length);
		localStorage.setItem(`LastAnimationIndex`, randomIndex.toString());
		this.FinalText = PageLogo.AvailableTexts[randomIndex];
		this.CharsDisplayed = 0;

		setTimeout(this.AdvanceChars.bind(this), PageLogo.AnimationInitialDelay);
	}

	private AdvanceChars(): void {
		this.CharsDisplayed++;
		this.Text = this.FinalText.substring(0, this.CharsDisplayed);
		
		if (this.CharsDisplayed < this.FinalText.length)
			setTimeout(this.AdvanceChars.bind(this), 50 + Math.random() * 50);
		else
			this.Class.add(`finished`);
	}
}