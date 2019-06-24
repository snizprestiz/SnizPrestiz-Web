export class LoggedUser{
	public static IsLogged: boolean;
	public static Token: string;
	public static Nickname: string;
	public static FullName: string;
	public static WisProxyUrl: string = `https://wisproxy.snizprestiz.eu`;

	public static Logout(): void {
		// TODO Kontaktovat server s žádostí o revoke tokenu
		
		this.IsLogged = false;
		this.Token = ``;
		this.Nickname = ``;
		this.FullName = ``;

		// TODO Přesměrovat na výchozí stránku
	}

	public static ValidatePassword(password: string): void {
		// TODO Validace hesla ze serveru
	}
}