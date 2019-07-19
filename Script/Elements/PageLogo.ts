import { Link } from "./Basic/Link";
import { String } from "typescript-string-operations";

/**
 * Hlavní animované logo webu "Sniž prestiž"
 */
export class PageLogo extends Link{
	public get ClassName(): string { return `PageLogo`; };

	/**
	 * Čas v ms než začne animace
	 */
	public static AnimationInitialDelay = 800;

	/**
	 * Různé variace loga
	 */
	public static AvailableTexts = [
		/*`prestiz--;`, // C-like jazyky
		`dec [prestiz]`, // Assembly
		`sub [prestiz] 1`, // Assembly
		`prestiz -= 1;`, // C-like jazyky
		`prestiz -= true;`, // C
		`$prestiz--;`, // PHP
		`--prestiz;`, // C-like jazyky
		`let "prestiz--"`, // Bash
		`(decf prestiz)`, // LISP
		`(- prestiz 1)`, // LISP*/
		`prestiz <= prestiz - 1;`, // VHDL
		//`prestiz += 0xFFFFFFFF;` // C (přetečení)
	];

	/**
	 * Finální text, který se má animovat
	 */
	private FinalText: string;

	/**
	 * Kolik znaků již bylo zobrazeno
	 */
	private CharsDisplayed: number;

	public constructor() {
		super(`/`);
		this.Tooltip = `Sniž prestiž`;
	}

	/**
	 * DOM reprezentace tohoto prvku
	 *
	 * Navíc při zavolání začne animace loga
	 */
	public get DOM(): HTMLElement {
		// Pokud je stránka načtena z nové záložka, neanimovat logo
		if (document.referrer == String.Empty ||
			new URL(document.referrer).hostname != location.hostname)
			this.AnimateLogo();
		else this.ShowWithoutAnimation();
		return this.Root;
	}

	/**
	 * Zobrazit logo bez animace
	 */
	private ShowWithoutAnimation(): void {
		// Pokud je uložena poslední variace v localstorage, použít tuto variaci
		let text: string = localStorage.getItem(`LastAnimationIndex`);
		if (text != null) text = PageLogo.AvailableTexts[Number(text)];
		if(text == null)
			text = PageLogo.AvailableTexts[Math.floor(Math.random() * PageLogo.AvailableTexts.length)];

		this.Text = text;
		this.Class.add(`finished`, `skip-animation`);
	}

	/**
	 * Zobrazit logo animovaně
	 */
	public AnimateLogo(): void {
		let randomIndex = Math.floor(Math.random() * PageLogo.AvailableTexts.length);
		localStorage.setItem(`LastAnimationIndex`, randomIndex.toString());
		this.FinalText = PageLogo.AvailableTexts[randomIndex];
		this.CharsDisplayed = 0;

		setTimeout(this.AdvanceChars.bind(this), PageLogo.AnimationInitialDelay);
	}

	/**
	 * Animovat logo
	 */
	private AdvanceChars(): void {
		this.CharsDisplayed++;
		this.Text = this.FinalText.substring(0, this.CharsDisplayed);

		if (this.CharsDisplayed < this.FinalText.length)
			setTimeout(this.AdvanceChars.bind(this), 50 + Math.random() * 50);
		else
			this.Class.add(`finished`);
	}
}
