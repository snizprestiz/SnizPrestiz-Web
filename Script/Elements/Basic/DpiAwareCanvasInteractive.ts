import { DpiAwareCanvas } from "./DpiAwareCanvas";
import { Point } from "./Point";

/**
 * Canvas prvek, který korektně pracuje s DPI displejů a reaguje na myš
 *
 * ```html
 * <canvas></canvas>
 * ```
 */
export class DpiAwareCanvasInteractive extends DpiAwareCanvas{
	/**
	 * Poslední známá pozice myši
	 */
	public MousePos: Point = { X: 0, Y: 0 };

	/**
	 * Nachází se myš uvnitř plátna
	 */
	public MouseHover: boolean = false;

	/**
	 * Timestamp - čas kdy došlo ke změně stavu hoveru
	 */
	public MouseHoverTime: number = 0;

	public constructor() {
		super();

		this.Root.onmouseenter = (): void => this.OnMouseHover(true);
		this.Root.onmouseleave = (): void => this.OnMouseHover(false);

		this.Root.onmousemove = (e): void => this.OnMouseMove({
			X: e.offsetX,
			Y: e.offsetY
		});
	}

	/**
	 * Metoda se zavolá pokud nastal pohyb myši
	 * @param position Pozice myši
	 */
	protected OnMouseMove(position: Point): void{
		this.MousePos = position;
		this.Draw();
	}

	/**
	 * Metoda se zavolá když dojde ke změně stavu hoveru
	 * @param hovered Je myš na plátně
	 */
	protected OnMouseHover(hovered: boolean): void{
		this.MouseHover = hovered;
		this.MouseHoverTime = Date.now();
		this.Draw();
	}
}
