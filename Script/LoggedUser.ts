export class LoggedUser{
	public static IsLogged: boolean;
	public static Token: string;
	public static Login: string;
	public static WisProxyUrl: string = `https://wisproxy.snizprestiz.eu`;

	public static Logout(): void {
		// TODO Kontaktovat server s žádostí o revoke tokenu

		this.IsLogged = false;
		this.Token = ``;
		this.Login = ``;

		// TODO Přesměrovat na výchozí stránku
	}

	public static ValidatePassword(password: string): void {
		// TODO Validace hesla ze serveru
	}
}
