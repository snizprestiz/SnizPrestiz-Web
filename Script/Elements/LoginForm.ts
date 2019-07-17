import { Element } from "./Basic/Element";
import { Link } from "./Basic/Link";
import { Paragraph } from "./Basic/Paragraph";
import { Form } from "./Basic/Form/Form";
import { TextInput } from "./Basic/Form/TextInput";
import { PasswordInput } from "./Basic/Form/PasswordInput";
import { SubmitButton } from "./Basic/Form/SubmitButton";
import { Checkbox } from "./Basic/Form/Checkbox";
import { RadioButton } from "./Basic/Form/RadioButton";
import { LinkTarget } from "./Basic/LinkTarget";
import { Image } from "./Basic/Image";
import { Heading } from "./Basic/Heading";
import { HeadingLevel } from "./Basic/HeadingLevel";
import { Flexbox } from "./Basic/Flexbox";

export class LoginForm extends Element{
	public get ClassName(): string { return `LoginForm`; }

	/**
	 * Má se skrít defaultně možnost přihlášení místním účtem
	 */
	public get LocalCollapsed(): boolean {
		return this.Class.contains(`CollapseLocalLogin`);
	}

	public set LocalCollapsed(v: boolean) {
		if(v) this.Class.add(`CollapseLocalLogin`);
		else this.Class.remove(`CollapseLocalLogin`);
	}

	/**
	 * @param localCollapsed Má se skrít defaultně možnost přihlášení místním účtem
	 */
	public constructor(localCollapsed: boolean = true) {
		super(
			new Element(
				new Link(`https://discordapp.com/api/oauth2/authorize?client_id=600429303376773134&redirect_uri=http%3A%2F%2Fsnizprestiz.eu%2Fauthorize&response_type=code&scope=identify&prompt=none`,
					new Image(``),
					`Přihlásit se přes Discord`
				),
				new Paragraph(
					`Přihlášení přes Discord vyžaduje, abyste byly připojení a ověření na `,
					new Link(`https://discord.gg/Y5AU5Y`, LinkTarget.NewTab, `VUT FIT Discord serveru`),
					`.`
				)
			).Options({Class: `DiscordLogin`}),
			new Form(
				new Heading(HeadingLevel.Subsection, `Přihlášení lokálním účtem`), // TODO přejmenovat
				new TextInput(`login`, `FIT login`, true).Options({ Placeholder: `xplagiat0b` }),
				new PasswordInput(`password`, `Heslo`, true),
				new Checkbox(`stayLogged`, `true`, `Zůstat přihlášen`),
				new Flexbox(
					new Link(`/register`, `Vytvořit nový účet`),
					new SubmitButton(`Přihlásit se`)
				)
			),
		);

		this.LocalCollapsed = localCollapsed;
	}
}
