import { DpiAwareCanvas } from "../Elements/Basic/DpiAwareCanvas";
import { GraphData, DistributionLabels } from "./GraphData";

/**
 * Histogram úspěšnosti předmětu
 */
export class Histogram extends DpiAwareCanvas{
	private PaddingLeft = 50;
	private PaddingBottom = 20;

	private MaxPoints: number = 0;
	private _Data: GraphData;

	/**
	 * Data histogramu
	 */
	public get Data(): GraphData { return this._Data; }
	public set Data(value: GraphData) {
		this._Data = value;
		this.MaxPoints = Math.max(
			...value.PointsDistribution,
			value.PointsDistribution[0] + value.PointsDistribution[1]
		);

		// Maximum je 8/7 velikosti největšího sloupce aby se tam vešla i legenda
		this.MaxPoints = Math.ceil(this.MaxPoints * (8 / 7) / 10) * 10;
		this.OnResize();
	}

	public constructor(data?: GraphData) {
		super();

		this.Root.classList.add(`Histogram`);
		if (data) this.Data = data;
	}

	public OnResize(): void {
		super.OnResize(false);
		this.Context.translate(0.5, 0.5);
		this.Draw();
	}

	public Draw(): void {
		super.Draw();

		if (this.Data == null)
			return;

		let ctx = this.Context;
		let heightUnit = (this.Height - this.PaddingBottom) / 10;
		let barSize = heightUnit * 2 / 3;

		ctx.strokeStyle = `#000000`;
		ctx.fillStyle = `#000000`;
		ctx.beginPath();
		ctx.moveTo(this.PaddingLeft, 0);
		ctx.lineTo(this.PaddingLeft, this.Height - this.PaddingBottom);
		ctx.lineTo(this.Width, this.Height - this.PaddingBottom);
		ctx.stroke();

		ctx.font = `12px 'Noto Sans'`;
		ctx.textAlign = `right`;
		ctx.textBaseline = `middle`;

		for (let i = 1; i < 11; i++){
			let yPos = i * heightUnit - heightUnit / 2;
			ctx.fillText(DistributionLabels[i], this.PaddingLeft - 7, yPos);
		}

		let nanLen = this.Data.PointsDistribution[0] / this.MaxPoints * (this.Width - this.PaddingLeft);
		let sum = 0;
		for (let i = 1; i < 11; i++){
			let yPos = (i - 1) * heightUnit + (heightUnit - barSize) / 2;
			let len = this.Data.PointsDistribution[i] / this.MaxPoints * (this.Width - this.PaddingLeft);
			sum += this.Data.PointsDistribution[i];
			ctx.strokeStyle = `#7F7F7F`;
			ctx.fillStyle = `#7F7F7F`;
			if (sum > this.Data.Failed && sum - this.Data.PointsDistribution[i] < this.Data.Failed) {
				ctx.beginPath();
				ctx.moveTo(this.PaddingLeft, yPos - 5);
				ctx.lineTo(this.Width - 1, yPos - 5);
				ctx.lineTo(this.Width - 1, yPos + 5);
				ctx.stroke();
				ctx.textAlign = `right`;
				ctx.textBaseline = `bottom`;
				ctx.fillText(`Hranice úspešnosti`, this.Width - 5, yPos - 7);
			}

			ctx.fillStyle = `rgba(0, 169, 224, 1)`;
			ctx.fillRect(this.PaddingLeft + (i == 1 ? nanLen : 0), yPos - 1, len, barSize);
			if (i == 1) {
				ctx.fillStyle = `rgba(0, 117, 155, 1)`;
				ctx.fillRect(this.PaddingLeft, yPos - 1, nanLen, barSize);
			}

			ctx.textAlign = `left`;
			ctx.textBaseline = `middle`;
			ctx.fillStyle = `#000000`;
			ctx.fillText(this.Data.PointsDistribution[i].toString(), this.PaddingLeft + len + 5 + (i == 1 ? nanLen : 0), yPos + barSize / 2);
		}

		ctx.textBaseline = `top`;
		ctx.textAlign = `left`;
		ctx.fillStyle = `#000000`;
		ctx.fillText(`0`, this.PaddingLeft, this.Height - this.PaddingBottom + 5);
		ctx.textAlign = `right`;
		ctx.fillText(this.MaxPoints.toString(), this.Width, this.Height - this.PaddingBottom + 5);
	}
}
