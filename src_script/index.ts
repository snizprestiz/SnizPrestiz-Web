import { PageHeader } from "./Elements/PageHeader";
import { MainContent } from "./Elements/MainContent";
import { PageFooter } from "./Elements/PageFooter";
import { LoggedUser } from "./LoggedUser";

LoggedUser.IsLogged = true;

let header = new PageHeader();
let body = new MainContent();
let footer = new PageFooter();
document.body.append(header.RootHTMLElement);
document.body.append(body.RootHTMLElement);
document.body.append(footer.RootHTMLElement);