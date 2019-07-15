import { GraphDataByYear } from "./GraphDataByYear";
import { String } from "typescript-string-operations";
import { DpiAwareCanvasInteractive } from "../Elements/DpiAwareCanvasInteractive";

export class OverviewGraph extends DpiAwareCanvasInteractive{
	private AnimationDuration = 1000;
	private PlotFillColor = `rgba(0, 169, 224, {0})`;
	private PlotColorPrimary = `rgb(0, 117, 155)`;
	private PlotColorSecondary = `rgb(199, 143, 0)`;
	private SidePadding = 50;
	private TopPadding = 20;
	private BottomPadding = 35;
	private PlotPassedPath: Path2D;
	private PlotEnrolledPath: Path2D;
	private EnrolledMax: number;
	private Transition = 100;

	private StartMilis: number = -1;
	private PlotFillGradient: CanvasGradient;
	private XAxisGradient: CanvasGradient;

	private _Data: GraphDataByYear[];
	public get Data(): GraphDataByYear[] { return this._Data; }
	public set Data(value: GraphDataByYear[]) {
		this._Data = value.sort((a, b): number => a.Year - b.Year);
		this.DoRenderLoop = true;
		this.StartMilis = Date.now();
		this.ResizeEvent();
	}

	public constructor() {
		super();
		this.Root.classList.add(`OverviewGraph`);
	}

	private GetGraphY(value: number, max: number): number {
		let usableHeight = this.Height - this.TopPadding - this.BottomPadding;
		return this.Height - this.BottomPadding - usableHeight * (value / max);
	}

	public ResizeEvent(): void{
		super.ResizeEvent(false);

		if (this.Data == null || this.Data.length == 0) return;

		let plotGradient = this.Context.createLinearGradient(0, 0, 0, this.Height);
		plotGradient.addColorStop(0, String.Format(this.PlotFillColor, 0.2));
		plotGradient.addColorStop(0.8, String.Format(this.PlotFillColor, 0));
		this.PlotFillGradient = plotGradient;

		let xAxisGradient = this.Context.createLinearGradient(0, this.TopPadding, 0, this.Height - this.BottomPadding);
		xAxisGradient.addColorStop(0.1, `rgba(0, 0, 0, 0)`);
		xAxisGradient.addColorStop(1, `rgba(0, 0, 0, 0.05)`);
		this.XAxisGradient = xAxisGradient;

		this.EnrolledMax = Math.max(...this.Data.map((data): number => data.Enrolled));
		if (this.EnrolledMax > 100) this.EnrolledMax = Math.ceil(this.EnrolledMax / 100) * 100;
		else this.EnrolledMax = Math.ceil(this.EnrolledMax / 10) * 10;

		let plotPassedPath = new Path2D();
		let plotEnrolledPath = new Path2D();
		plotPassedPath.moveTo(-1, this.GetGraphY(this.Data[0].Passed, this.Data[0].Enrolled));
		plotPassedPath.lineTo(this.SidePadding, this.GetGraphY(this.Data[0].Passed, this.Data[0].Enrolled));
		plotEnrolledPath.moveTo(-1, this.GetGraphY(this.Data[0].Enrolled, this.EnrolledMax));
		plotEnrolledPath.lineTo(this.SidePadding, this.GetGraphY(this.Data[0].Enrolled, this.EnrolledMax));

		if (this.Data.length > 1) {
			let usableWidth = this.Width - this.SidePadding * 2;
			let widthUnit = usableWidth / (this.Data.length - 1);

			for (let i = 1; i < this.Data.length; i++) {
				plotPassedPath.bezierCurveTo(
					this.SidePadding + i * widthUnit - widthUnit / 2,
					this.GetGraphY(this.Data[i - 1].Passed, this.Data[i - 1].Enrolled),
					this.SidePadding + i * widthUnit - widthUnit / 2,
					this.GetGraphY(this.Data[i].Passed, this.Data[i].Enrolled),
					this.SidePadding + i * widthUnit,
					this.GetGraphY(this.Data[i].Passed, this.Data[i].Enrolled)
				);

				plotEnrolledPath.bezierCurveTo(
					this.SidePadding + i * widthUnit - widthUnit / 2,
					this.GetGraphY(this.Data[i - 1].Enrolled, this.EnrolledMax),
					this.SidePadding + i * widthUnit - widthUnit / 2,
					this.GetGraphY(this.Data[i].Enrolled, this.EnrolledMax),
					this.SidePadding + i * widthUnit,
					this.GetGraphY(this.Data[i].Enrolled, this.EnrolledMax)
				);
			}
		}

		let lastData = this.Data[this.Data.length - 1];

		plotEnrolledPath.lineTo(this.Width + 1, this.GetGraphY(lastData.Enrolled, this.EnrolledMax));
		plotPassedPath.lineTo(this.Width + 1, this.GetGraphY(lastData.Passed, lastData.Enrolled));
		plotPassedPath.lineTo(this.Width + 1, this.Height + 1);
		plotPassedPath.lineTo(-1, this.Height + 1);
		plotPassedPath.closePath();

		this.PlotPassedPath = plotPassedPath;
		this.PlotEnrolledPath = plotEnrolledPath;

		this.Draw();
	}

	private GetScoolYear(year: number): string {
		if (year < 1000) return null;
		return `${year.toString().substring(2)}/${(year + 1).toString().substring(2)}`;
	}

	private DrawXAxis(progress: number = 1): void{
		let ctx = this.Context;
		let usableWidth = this.Width - this.SidePadding * 2;
		let widthUnit = usableWidth / (this.Data.length - 1);
		let animPosX = this.Width * progress;

		ctx.textAlign = `center`;
		ctx.lineWidth = 1;
		ctx.font = `16px 'Noto Sans'`;
		ctx.textBaseline = `bottom`;
		ctx.strokeStyle = this.XAxisGradient;
		ctx.fillStyle = `rgb(150, 150, 150)`;
		for (let i = 0; i < this.Data.length; i++) {
			let x = this.SidePadding + i * widthUnit;
			let opacity = (animPosX - x + this.SidePadding * 4) / (this.SidePadding * 5);
			if (opacity > 1) opacity = 1;
			else if (opacity < 0) opacity = 0;

			ctx.globalAlpha = opacity;
			ctx.beginPath();
			ctx.moveTo(x, this.TopPadding);
			ctx.lineTo(x, this.Height - this.BottomPadding + 5);
			ctx.stroke();
			ctx.fillText(
				this.GetScoolYear(this.Data[i].Year),
				x,
				this.Height - 10 * (1 - opacity)
			);
		}
		ctx.globalAlpha = 1;
	}

	private DrawYAxis(): void{
		let ctx = this.Context;

		if (this.MouseHoverTime == undefined) return;

		let progress = (Date.now() - this.MouseHoverTime) / this.Transition;
		if (progress < 0) progress = 0;
		if (progress > 1) progress = 1;
		if (!this.MouseHover) progress = 1 - progress;

		ctx.lineWidth = 1;
		ctx.strokeStyle = `rgba(0, 0, 0, 0.1)`;

		ctx.globalAlpha = progress;
		ctx.beginPath();
		ctx.moveTo(0, this.TopPadding);
		ctx.lineTo(this.Width, this.TopPadding);
		ctx.moveTo(0, this.TopPadding + (this.Height - this.TopPadding - this.BottomPadding) / 2);
		ctx.lineTo(this.Width, this.TopPadding + (this.Height - this.TopPadding - this.BottomPadding) / 2);
		ctx.moveTo(0, this.Height - this.BottomPadding);
		ctx.lineTo(this.Width, this.Height - this.BottomPadding);
		ctx.stroke();


		ctx.textBaseline = `bottom`;
		ctx.font = `12px 'Noto Sans'`;

		ctx.fillStyle = this.PlotColorPrimary;
		ctx.textAlign = `left`;
		ctx.fillText(`100%`, 5, this.TopPadding - 1);
		ctx.fillText(`50%`, 5, this.TopPadding + (this.Height - this.TopPadding - this.BottomPadding) / 2 - 1);
		ctx.fillText(`0%`, 5, this.Height - this.BottomPadding - 1);

		ctx.fillStyle = this.PlotColorSecondary;
		ctx.textAlign = `right`;
		ctx.fillText(this.EnrolledMax.toString(), this.Width - 5, this.TopPadding - 1);
		ctx.fillText((this.EnrolledMax / 2).toString(),this.Width - 5, this.TopPadding + (this.Height - this.TopPadding - this.BottomPadding) / 2 - 1);
		ctx.fillText(`0`, this.Width - 5, this.Height - this.BottomPadding - 1);

		ctx.globalAlpha = 1;
	}

	private DrawPlot(progress: number = 1): void{
		let ctx = this.Context;
		let animPosX = this.Width * progress;

		ctx.fillStyle = this.PlotFillGradient;
		ctx.strokeStyle = this.PlotColorPrimary;
		ctx.lineWidth = 1.5;

		ctx.save();
		ctx.beginPath();
		ctx.rect(0, 0, animPosX, this.Height);
		ctx.clip();

		ctx.fill(this.PlotPassedPath);
		ctx.stroke(this.PlotPassedPath);

		ctx.strokeStyle = this.PlotColorSecondary;
		ctx.stroke(this.PlotEnrolledPath);
		ctx.restore();
	}

	private DrawLabel(): void{
		if (!this.MouseHover) return;

		let ctx = this.Context;
		let usableWidth = this.Width - this.SidePadding * 2;
		let widthUnit = usableWidth / (this.Data.length - 1);

		let index = Math.round((this.MousePos.X - this.SidePadding) / widthUnit);
		if (index < 0 || index >= this.Data.length) return;

		ctx.font = `15px 'Noto Sans'`;
		ctx.textAlign = `center`;

		let xPos = this.SidePadding + widthUnit * index;
		let indexData = this.Data[index];
		let passedY = this.GetGraphY(indexData.Passed, indexData.Enrolled);
		let enrolledY = this.GetGraphY(indexData.Enrolled, this.EnrolledMax);
		let passedText = `${Math.round(indexData.Passed / indexData.Enrolled * 100)}%`;
		let enrolledText = indexData.Enrolled.toString();
		let passedTextSize = ctx.measureText(passedText).width + 10;
		let enrolledTextSize = ctx.measureText(enrolledText).width + 10;

		ctx.lineWidth = 2;
		ctx.fillStyle = this.PlotColorPrimary;
		ctx.beginPath();
		ctx.arc(xPos, passedY, 3, 0, Math.PI * 2);
		this.DrawRoundRectangle(ctx, xPos - passedTextSize / 2, passedY - (passedY < enrolledY ? 29 : -7), passedTextSize, 22);
		ctx.fill();

		ctx.fillStyle = this.PlotColorSecondary;
		ctx.beginPath();
		ctx.arc(xPos, enrolledY, 3, 0, Math.PI * 2);
		this.DrawRoundRectangle(ctx, xPos - enrolledTextSize / 2, enrolledY - (passedY > enrolledY ? 29 : -7), enrolledTextSize, 22);
		ctx.fill();


		ctx.fillStyle = `white`;
		ctx.textBaseline = passedY < enrolledY ? `bottom` : `top`;
		ctx.fillText(passedText, xPos, passedY + 1 +10 * (passedY < enrolledY ? -1 : 1));
		ctx.textBaseline = passedY > enrolledY ? `bottom` : `top`;
		ctx.fillText(enrolledText, xPos, enrolledY + 1 + 10 * (passedY > enrolledY ? -1 : 1));
	}

	public Draw(): void{
		super.Draw();

		if (this.StartMilis < 0 || this.Data == null || this.PlotPassedPath == null)
			return;

		let animTime = (Date.now() - this.StartMilis) / this.AnimationDuration;

		// Animace osy X je předsazená, aby začala na nule musí být časování záporné
		animTime -= this.SidePadding * 3 / this.Width;

		if (animTime > 1) {
			animTime = 1;
			if(Date.now() - this.MouseHoverTime > this.Transition)
				this.DoRenderLoop = false;
		}

		let animProgress = animTime < 0 ? animTime : Math.sin(animTime * Math.PI / 2);

		this.DrawXAxis(animProgress);
		this.DrawPlot(animProgress);
		this.DrawYAxis();
		this.DrawLabel();
	}

	protected MouseHoverEvent(hovered: boolean): void {
		super.MouseHoverEvent(hovered);
		this.DoRenderLoop = true;
	}
}
