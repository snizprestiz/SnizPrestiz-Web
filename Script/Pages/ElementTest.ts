import { PageRouter } from './../PageRouter';
import { Page } from "./Page";
import { WidthLimitedElement } from "../Elements/Basic/WidthLimitedElement";
import { Header } from "../Elements/Basic/Header";
import { Heading } from "../Elements/Basic/Heading";
import { HeadingLevel } from "../Elements/Basic/HeadingLevel";
import { Paragraph } from "../Elements/Basic/Paragraph";
import { Form } from '../Elements/Basic/Input/Form';
import { SearchInput } from '../Elements/Basic/Input/SearchInput';
import { TextInput } from '../Elements/Basic/Input/TextInput';
import { PasswordInput } from '../Elements/Basic/Input/PasswordInput';
import { Checkbox } from '../Elements/Basic/Input/Checkbox';
import { RadioButton } from '../Elements/Basic/Input/RadioButton';
import { Flexbox } from '../Elements/Basic/Flexbox';
import { Button } from '../Elements/Basic/Input/Button';
import { Icon } from '../Elements/Basic/Icon';
import { IconType } from '../Elements/Basic/IconType';
import { ButtonContainer } from '../Elements/Basic/Input/ButtonContainer';
import { Main } from '../Elements/Basic/Main';
import { Link } from '../Elements/Basic/Link';
import { Footer } from '../Elements/Basic/Footer';

export class ElementTest extends Page{
	public get Name(): string { return `ElementTest`; }

	public constructor() {
		super();

		PageRouter.PageTitle = `Test zobrazení prvků`;

		this.Children.push(
			new WidthLimitedElement(
				new Header(
					new Heading(HeadingLevel.Title, `Title`),
					new Heading(HeadingLevel.Section, `Section`),
					new Heading(HeadingLevel.Subsection, `Subsection`),
				),
				new Form(
					new SearchInput(null, `Search`),
					new SearchInput(null, `Search disabled`).Options({ Enabled: false }),
					new SearchInput(null, `Search with button`, null, true),
					new TextInput(null, `Text`),
					new TextInput(null, `Text disabled`).Options({ Enabled: false, Value: `Hello world` }),
					new TextInput(null, `Text readonly`).Options({ ReadOnly: true, Value: `Hello world` }),
					new PasswordInput(null, `Password`),
					new Checkbox(null, null, `Checkbox`),
					new Checkbox(null, null, `Checkbox checked`).Options({ Checked: true }),
					new Checkbox(null, null, `Checkbox disabled`).Options({ Enabled: false }),
					new Checkbox(null, null, `Checkbox disabled checked`).Options({ Checked: true, Enabled: false }),
					new RadioButton(`radio`, null, `Radio`),
					new RadioButton(`radio`, null, `Radio checked`).Options({ Checked: true }),
					new RadioButton(`radio2`, null, `Radio disabled`).Options({ Enabled: false }),
					new RadioButton(`radio2`, null, `Radio disabled checked`).Options({ Enabled: false, Checked: true }),
					new Flexbox(
						new Button({}, `Button`),
						new Button({}, new Icon(`sign-in`), `Button with icon`),
						new Button({ Enabled: false }, `Button disabled`),
						new Button({ Destructive: true }, `Destructive`),
						new Button({ Destructive: true }, new Icon(`trash-alt`), `Destructive with icon`),
						new Button({ Destructive: true, Enabled: false }, `Destructive disabled`),
						new Button({ Secondary: true }, `Secondary Button`),
						new Button({ Secondary: true }, new Icon(`download`, IconType.Solid), `Secondary with icon`),
						new Button({ Secondary: true, Enabled: false }, `Secondary disabled`),
						new Button({ Secondary: true, Destructive: true }, `Secondary destructive`),
						new Button({ Secondary: true, Destructive: true }, new Icon(`ban`, IconType.Solid), `Secondary destructive with icon`),
						new Button({ Secondary: true, Destructive: true, Enabled: false }, `Secondary destructive disabled`)
					),
					new ButtonContainer(
						new Button({ Enabled: false }, `Přidat příspěvek`),
						new Button({ Secondary: true }, `Zrušit`)
					),
					new ButtonContainer(
						new Button({ }, `Přihlásit se`),
						new Button({ Secondary: true }, `Obnovit heslo`)
					),
					new ButtonContainer(
						new Button({ Destructive: true}, `Odstranit`),
						new Button({ Secondary: true, Enabled: false }, `Zpět`)
					),
					new ButtonContainer(
						new Button({ }, `Uložit změny`),
						new Button({ Secondary: true }, `Zrušit`),
						new Button({ Secondary: true, Destructive: true }, new Icon(`trash-alt`), `Odstranit`)
					)
				),
				new Main(
					new Paragraph(`Paragraph, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Etiam bibendum elit eget erat. Morbi scelerisque luctus velit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Nulla non arcu lacinia neque faucibus fringilla. Nam sed tellus id magna elementum tincidunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Vivamus luctus egestas leo. Integer in sapien. Etiam dictum tincidunt diam.`),
					new Link(`/`, `Link`),
					new Icon(`font-awesome`, IconType.Brand)
				),
				new Footer(`Footer`)
			).Options({Class: `Card`})
		);
	}
}
