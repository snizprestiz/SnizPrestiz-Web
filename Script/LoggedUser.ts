/**
 * Přihlášený uživatel
 */
export class LoggedUser{
	/**
	 * Je uživatel přihlášen
	 */
	public static IsLogged: boolean;

	/**
	 * Token přihlášení
	 */
	public static Token: string;

	/**
	 * Login uživatele
	 */
	public static Login: string;

	/**
	 * Adresa proxy serveru pro připojení s WISem
	 */
	public static WisProxyUrl: string = `https://wisproxy.snizprestiz.eu`;

	/**
	 * Odhlásit uživatele
	 */
	public static Logout(): void {
		// TODO Kontaktovat server s žádostí o revoke tokenu

		this.IsLogged = false;
		this.Token = ``;
		this.Login = ``;

		// TODO Přesměrovat na výchozí stránku
	}

	/**
	 * Kontrola správnosti hesla
	 * @param password Heslo
	 */
	public static ValidatePassword(password: string): void {
		// TODO Validace hesla ze serveru
	}
}
