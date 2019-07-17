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
import { SubmitButton } from './Basic/Form/SubmitButton';
import { SearchInput } from './Basic/Form/SearchInput';
import { TextInput } from './Basic/Form/TextInput';
import { RadioButton } from './Basic/Form/RadioButton';
import { PasswordInput } from './Basic/Form/PasswordInput';
import { Checkbox } from './Basic/Form/Checkbox';
import { Form } from './Basic/Form/Form';

export class Test extends WidthLimitedElement{
	public get ClassName(): string { return `Test`; }

	public constructor() {
		super(
			new Header(
				new Heading(HeadingLevel.Title, `Title`),
				new Heading(HeadingLevel.Section, `Section`),
				new Heading(HeadingLevel.Subsection, `Subsection`),
				new Heading(HeadingLevel.Paragraph, `Paragraph`),
			),
			new Form(
				new SearchInput(null, `Search`),
				new TextInput(null, `Text`),
				new PasswordInput(null, `Password`),
				new Checkbox(null, null, `Checkbox`),
				new RadioButton(`radio`, null, `Radio 1`),
				new RadioButton(`radio`, null, `Radio 2`).Options({Checked: true}),
				new RadioButton(`radio`, null, `Radio 3`),
				new SubmitButton(`Submit`)
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
