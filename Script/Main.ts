import { PageHeader } from "./Elements/PageHeader";
import { MainContent } from "./Elements/MainContent";
import { PageFooter } from "./Elements/PageFooter";
import { LoggedUser } from "./LoggedUser";

LoggedUser.IsLogged = true;

document.body.append(
	new PageHeader().DOM,
	new MainContent().DOM,
	new PageFooter().DOM
);