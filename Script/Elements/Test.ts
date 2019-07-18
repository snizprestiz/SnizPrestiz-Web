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
				new SearchInput(null, `Search with button`, null, true),
				new TextInput(null, `Text`),
				new PasswordInput(null, `Password`),
				new Checkbox(null, null, `Checkbox`),
				new RadioButton(`radio`, null, `Radio 1`),
				new RadioButton(`radio`, null, `Radio 2`).Options({ Checked: true }),
				new RadioButton(`radio`, null, `Radio 3`),
				new Flexbox(
					new Button({}, `Button`),
					new Button({ Enabled: false }, `Button Disabled`),
					new Button({ Destructive: true }, `Destructive`),
					new Button({ Destructive: true, Enabled: false }, `Destructive Disabled`),
					new Button({ Primary: true }, `Primary Button`),
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
