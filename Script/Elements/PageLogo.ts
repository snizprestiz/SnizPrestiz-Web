import { Element } from "./Element";

export class PageLogo extends Element{
	public get ClassName(): string { return `PageLogo`; }	
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

	protected Root: HTMLAnchorElement;
	private FinalText: string;
	private CharsDisplayed: number;

	public constructor() {
		super(`a`);
		this.Root.title = `Sniž prestiž`;
		this.Root.href = `/`;
	}

	
	public get RootHTMLElement(): HTMLElement {
		this.AnimateLogo();
		return this.Root;
	}
	
	
	public AnimateLogo(): void {
		let randomIndex = Math.floor(Math.random() * PageLogo.AvailableTexts.length);

		this.FinalText = PageLogo.AvailableTexts[randomIndex];
		this.CharsDisplayed = 0;

		setTimeout(this.AdvanceChars.bind(this), PageLogo.AnimationInitialDelay);
	}

	private AdvanceChars(): void {
		this.CharsDisplayed++;
		this.Root.textContent = this.FinalText.substring(0, this.CharsDisplayed);
		
		if (this.CharsDisplayed < this.FinalText.length)
			setTimeout(this.AdvanceChars.bind(this), 50 + Math.random() * 50);
		else
			this.Root.classList.add(`finished`);
	}
}