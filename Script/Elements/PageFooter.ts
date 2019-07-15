import { Link } from "./Basic/Link";
import { LinkTarget } from "./Basic/LinkTarget";
import { Footer } from "./Basic/Footer";
import { Element } from "./Basic/Element";

export class PageFooter extends Footer{
	public get ClassName(): string { return `PageFooter`; }
	public constructor() {
		super(
			new Element(`Sniž prestiž, 2019`),
			new Link(`https://github.com/snizprestiz`, LinkTarget.NewTab, `GitHub`),
			`, `,
			new Link(`https://github.com/snizprestiz/snizprestiz-web/issues`, LinkTarget.NewTab, `Issue tracker`)
		);
	}
}
