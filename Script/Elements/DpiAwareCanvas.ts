import { Element } from "./Basic/Element";

/**
 * Canvas prvek, který korektně pracuje s DPI displejů
 *
 * ```html
 * <canvas></canvas>
 * ```
 */
export class DpiAwareCanvas extends Element{
	public get TagName(): string { return `canvas`; }
	protected Root: HTMLCanvasElement;

	private _DoRenderLoop: boolean;
	/**
	 * Má se vykonávat renderovací cyklus (za pomocí `requestAnimationFrame`)
	 */
	public set DoRenderLoop(value: boolean) {
		this._DoRenderLoop = value;
		if (value) this.RenderLoop();
	}

	private _Context: CanvasRenderingContext2D;
	/**
	 * 2D Canvas kontext
	 */
	public get Context(): CanvasRenderingContext2D { return this._Context; }
	/**
	 * Šířka plátna pro vykreslování
	 */
	public get Width(): number { return this.Root.width / devicePixelRatio; };
	/**
	 * Výška plátna pro vykreslování
	 */
	public get Height(): number { return this.Root.height / devicePixelRatio; };

	public constructor() {
		super();
		window.addEventListener(`resize`, (): void => this.OnResize());
		this.OnResize();
	}

	/**
	 * Metoda která se vykoná při změně velikosti
	 * @param redraw Má se překreslit plátno
	 */
	public OnResize(redraw: boolean = true): void{
		this.Root.width = this.Root.clientWidth * devicePixelRatio;
		this.Root.height = this.Root.clientHeight * devicePixelRatio;

		let context = this.Root.getContext(`2d`);
		context.scale(devicePixelRatio, devicePixelRatio);
		this._Context = context;

		if(redraw) this.Draw();
	}

	/**
	 * Kreslaní na plátno
	 */
	protected Draw(): void{
		this.Context.clearRect(0, 0, this.Width, this.Height);
	}

	/**
	 * Renderovací cyklus
	 */
	protected RenderLoop(): void{
		if (!this._DoRenderLoop) return;

		this.Draw();
		requestAnimationFrame((): void => this.RenderLoop());
	}

	/**
	 * Metoda pro vykreslení obdélníku se zakulacenými rohy
	 * @param x Počáteční pozice na ose X
	 * @param y Počáteční pozice na ose Y
	 * @param width Sířka obdélníku
	 * @param height Výška obdélníku
	 * @param radius Poloměr rohů
	 */
	protected DrawRoundRectangle(x: number, y: number, width: number, height: number, radius: number = 5): void {
		let ctx = this.Context;
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();
	}
}
