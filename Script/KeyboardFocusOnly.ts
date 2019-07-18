/**
 * Třída nastaví tělu dokumentu třídu `CanFocus` pokud poslední vstup byl klávesnicí.
 *
 * Toto se využívá u polí formuláře, když je na pole navigováno klávesnicí (TABem).
 * Je to takový hack jen do doby než bude standardní pseudoselektor `:focus-visible`
 *
 * **2019-07**
 * 	- Zatím tento selektor podporuje pouze Firefox a po povolení v about:flags Chromium
 */
export class KeyboardFocusOnly{
	public static Activate(): void {
		document.body.addEventListener(`mousedown`, (): void =>
			document.body.classList.remove(`CanFocus`)
		);

		document.body.addEventListener(`keydown`, (): void =>
			document.body.classList.add(`CanFocus`)
		);
	}
}
