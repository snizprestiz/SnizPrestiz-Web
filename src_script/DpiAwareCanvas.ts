import { Point } from "./Point";

export class DpiAwareCanvas{
	private _HTMLElement: HTMLCanvasElement;
	public get HMTLElement() { return this._HTMLElement }
	
	private _DoRenderLoop: boolean;
	public set DoRenderLoop(value: boolean) {
		this._DoRenderLoop = value;
		if (value) this.RenderLoop();
	}
	
	private _Context: CanvasRenderingContext2D;
	public get Context() { return this._Context }
	public get Width() { return this._HTMLElement.width / devicePixelRatio};
	public get Height() { return this._HTMLElement.height / devicePixelRatio };

	public MousePos: Point = {X: 0, Y: 0};
	public MouseHover: boolean = false;
	public MouseHoverTime: number = 0;

	public constructor(reactToMouseEvents: boolean = true) {
		this._HTMLElement = document.createElement("canvas");
		window.addEventListener("resize", () => this.ResizeEvent());
		this.ResizeEvent();
		
		if (!reactToMouseEvents) return;
		
		this._HTMLElement.addEventListener("mouseenter", () => this.MouseHoverEvent(true));
		this._HTMLElement.addEventListener("mouseleave", () => this.MouseHoverEvent(false));
		this._HTMLElement.addEventListener("mousemove", (e) => this.MouseMoveEvent({
			X: e.offsetX,
			Y: e.offsetY
		}));
	}

	protected MouseMoveEvent(position: Point): void{
		this.MousePos = position;
		this.Draw();
	}

	protected MouseHoverEvent(hovered: boolean): void{
		this.MouseHover = hovered;
		this.MouseHoverTime = Date.now();
		this.Draw();
	}

	protected ResizeEvent(redraw: boolean = true): void{
		this._HTMLElement.width = this._HTMLElement.clientWidth * devicePixelRatio;
		this._HTMLElement.height = this._HTMLElement.clientHeight * devicePixelRatio;

		let context = this._HTMLElement.getContext("2d");
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
		requestAnimationFrame(() => this.RenderLoop());
	}

	protected DrawRoundRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number = 5): void{
		//ctx.beginPath();
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