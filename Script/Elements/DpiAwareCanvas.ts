import { Element } from "./Basic/Element";

export class DpiAwareCanvas extends Element{
	public get TagName(): string { return `canvas`; }
	protected Root: HTMLCanvasElement;
	
	private _DoRenderLoop: boolean;
	public set DoRenderLoop(value: boolean) {
		this._DoRenderLoop = value;
		if (value) this.RenderLoop();
	}
	
	private _Context: CanvasRenderingContext2D;
	public get Context(): CanvasRenderingContext2D { return this._Context; }
	public get Width(): number { return this.Root.width / devicePixelRatio; };
	public get Height(): number { return this.Root.height / devicePixelRatio; };

	public constructor() {
		super();
		window.addEventListener(`resize`, (): void => this.ResizeEvent());
		this.ResizeEvent();
	}

	public ResizeEvent(redraw: boolean = true): void{
		this.Root.width = this.Root.clientWidth * devicePixelRatio;
		this.Root.height = this.Root.clientHeight * devicePixelRatio;

		let context = this.Root.getContext(`2d`);
		context.scale(devicePixelRatio, devicePixelRatio);
		this._Context = context;

		if(redraw) this.Draw();
	}

	protected Draw(): void{
		this.Context.clearRect(0, 0, this.Width, this.Height);
	}

	protected RenderLoop(): void{
		if (!this._DoRenderLoop) return;
		
		this.Draw();
		requestAnimationFrame((): void => this.RenderLoop());
	}

	protected DrawRoundRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number = 5): void {
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