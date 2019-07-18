import { Flexbox } from './Basic/Flexbox';
import { Button } from './Basic/Input/Button';
import { WidthLimitedElement } from './Basic/WidthLimitedElement';
import { IconType } from './Basic/IconType';
import { Icon } from './Basic/Icon';
import { Link } from './Basic/Link';
import { Paragraph } from './Basic/Paragraph';
import { Footer } from './Basic/Footer';
import { Main } from './Basic/Main';
import { HeadingLevel } from './Basic/HeadingLevel';
import { Heading } from './Basic/Heading';
import { Header } from './Basic/Header';
import { SearchInput } from './Basic/Input/SearchInput';
import { TextInput } from './Basic/Input/TextInput';
import { RadioButton } from './Basic/Input/RadioButton';
import { PasswordInput } from './Basic/Input/PasswordInput';
import { Checkbox } from './Basic/Input/Checkbox';
import { Form } from './Basic/Input/Form';

export class Test extends WidthLimitedElement{
	public get ClassName(): string { return `Test`; }

	public constructor() {
		super(
			new Header(
				new Heading(HeadingLevel.Title, `Title`),
				new Heading(HeadingLevel.Section, `Section`),
				new Heading(HeadingLevel.Subsection, `Subsection`),
			),
			new Form(
				new SearchInput(null, `Search`),
				new SearchInput(null, `Search disabled`).Options({Enabled: false}),
				new SearchInput(null, `Search with button`, null, true),
				new TextInput(null, `Text`),
				new TextInput(null, `Text disabled`).Options({Enabled: false, Value: `Hello world`}),
				new TextInput(null, `Text readonly`).Options({ReadOnly: true, Value: `Hello world`}),
				new PasswordInput(null, `Password`),
				new Checkbox(null, null, `Checkbox`),
				new Checkbox(null, null, `Checkbox checked`).Options({Checked: true}),
				new Checkbox(null, null, `Checkbox disabled`).Options({Enabled: false}),
				new Checkbox(null, null, `Checkbox disabled checked`).Options({Checked: true, Enabled: false}),
				new RadioButton(`radio`, null, `Radio`),
				new RadioButton(`radio`, null, `Radio checked`).Options({ Checked: true }),
				new RadioButton(`radio2`, null, `Radio disabled`).Options({Enabled: false}),
				new RadioButton(`radio2`, null, `Radio disabled checked`).Options({Enabled: false, Checked: true}),
				new Flexbox(
					new Button({}, `Button`),
					new Button({ Enabled: false }, `Button Disabled`),
					new Button({ Destructive: true }, `Destructive`),
					new Button({ Destructive: true, Enabled: false }, `Destructive Disabled`),
					new Button({ Primary: true }, `Primary Button`),
					new Button({ Primary: true }, new Icon(`user`), ` Button with icon`),
					new Button({ Primary: true, Enabled: false }, `Primary Disabled`),
					new Button({ Primary: true, Destructive: true }, `Primary Destructive`),
					new Button({ Primary: true, Destructive: true, Enabled: false }, `Primary Destructive Disabled`)
				)
			),
			new Main(
				new Paragraph(`Paragraph, lorem ipsum...`),
				new Link(`/`, `Link`),
				new Icon(`bow-arrow`, IconType.Solid)
			),
			new Footer(`Footer`)
		);

		this.Class.add(`Card`);
	}
}
