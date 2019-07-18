import { Button } from './../Elements/Basic/Input/Button';
import { Element } from './../Elements/Basic/Element';
import { IconType } from './../Elements/Basic/IconType';
import { Icon } from './../Elements/Basic/Icon';
import { Paragraph } from './../Elements/Basic/Paragraph';
import { PageRouter } from './../PageRouter';
import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";

export class Authorize extends Page{
	public get Name(): string { return `Authorize`; }

	private IconPermit: Icon = new Icon(`spinner-third`, IconType.Light);
	private TextPermit: Element = new Element(`Schválení propojení`);
	private IconCreate: Icon = new Icon(`circle`, IconType.Light);
	private TextCreate: Element = new Element(`Přihlášení`);
	private IconVerify: Icon = new Icon(`circle`, IconType.Light);
	private TextVerify: Element = new Element(`Ověření role na VUT FIT Discord serveru`);

	private ContinueButton: Button = new Button({  }).Options({ Class: `Hidden LargeButton` });

	private Status: Paragraph = new Paragraph(`Počkejte prosím, probíhá propojování vašeho účtu...`).Options({Class: `Status`});

	public constructor() {
		super();
		PageRouter.PageTitle = `Autorizace Discord účtu`;

		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new Heading(HeadingLevel.Title, `Autorizace Discord účtu`)
				),
				new Element(
					this.IconPermit,
					this.TextPermit,
					this.IconCreate,
					this.TextCreate,
					this.IconVerify,
					this.TextVerify
				).Options({ Class: `State` }),
				this.Status,
				this.ContinueButton,
			).Options({Class: `Card Small`})
		);

		this.PermitState();
	}

	private PermitState(): void{

		let code = PageRouter.Query.get(`code`);

		if (!code) {
			let error = PageRouter.Query.get(`error`);

			this.IconPermit.Name = `times-circle`;
			this.IconPermit.Class.add(`Failure`);
			this.TextPermit.Text = `Propojení nebylo schváleno (${error})`;
			this.TextPermit.Children.push(new Element(PageRouter.Query.get(`error_description`)));

			return;
		}

		this.IconPermit.Name = `check-circle`;
		this.IconPermit.Class.add(`Success`);

		this.IconCreate.Name = `spinner-third`;
		this.IconCreate.Class.add(`Active`);

		this.CreateState();
	}

	private CreateState(): void{
		setTimeout((): void => {
			this.IconCreate.Name = `check-circle`;
			this.IconCreate.Class.remove(`Active`);
			this.IconCreate.Class.add(`Success`);

			this.IconVerify.Name = `spinner-third`;
			this.IconVerify.Class.add(`Active`);

			this.VerifyState();
		}, 1000);
	}

	private VerifyState(): void{
		setTimeout((): void => {
			this.IconVerify.Name = `check-circle`;
			this.IconVerify.Class.remove(`Active`);
			this.IconVerify.Class.add(`Success`);
			this.Success();
		}, 1000);
	}

	private Success(): void {
		this.Status.Text = `Propojení a ověření vašeho účtu proběhlo úspěšně. Nyní máte přístup ke všem studijním materiálům.`;
		this.ContinueButton.Class.remove(`Hidden`);
		this.ContinueButton.Children.push(
			new Icon(`walking`, IconType.Regular),
			`Jdem snížit prestiž`
		);
	}
}
