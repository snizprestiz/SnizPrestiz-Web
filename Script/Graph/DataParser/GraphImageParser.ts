import { GraphData } from "../GraphData";

/**
 * Analyzátor dat histogramu z obrázku
 *
 * TODO Dokončit dokumentaci
 */
export class GraphImageParser{
	private static ParserContext: CanvasRenderingContext2D = null;

	private static SetupParserCanvas(): void {
		let canvas = document.createElement(`canvas`);
		canvas.width = 400;
		canvas.height = 400;
		this.ParserContext = canvas.getContext(`2d`);
	}

	public static GetGraphData(image: HTMLImageElement): GraphData{
		if (this.ParserContext == null) this.SetupParserCanvas();

		if (image.width != 400 || image.height != 400)
			throw new Error(`Image has incorrect dimensions`);

		this.ParserContext.drawImage(image, 0, 0);
		let imageData = this.ParserContext.getImageData(0, 0, 400, 400);

		if (!this.ImageValidateTestPoints(imageData))
			throw new Error(`Image validation failed`);

		let graphData = new GraphData();
		graphData.Passed = this.ParseNumber(imageData, 120, 384);
		graphData.Failed = this.ParseNumber(imageData, 218 + graphData.Passed.toString().length * 7, 384);
		this.ParseGraph(imageData, graphData.Enrolled, graphData.PointsDistribution);

		return graphData;
	}

	private static ImageTestPoints = [
		{ x:   0, y:   0, value: [  0,   0,   0]},
		{ x:  50, y:  40, value: [  0,   0,   0]},
		{ x: 380, y:  40, value: [  0,   0,   0]},
		{ x:  51, y:  41, value: [255, 255, 255]},
		{ x: 379, y:  41, value: [255, 255, 255]},
		{ x:  50, y: 380, value: [  0,   0,   0]},
		{ x:  51, y: 379, value: [255, 255, 255]},
		{ x: 108, y: 385, value: [  0,   0,   0]}
	];

	private static ImageValidateTestPoints(imageData: ImageData): boolean {
		for (const testPoint of this.ImageTestPoints) {
			let index = testPoint.x + testPoint.y * imageData.width;

			if (imageData.data[index * 4] != testPoint.value[0] ||
				imageData.data[index * 4 + 1] != testPoint.value[1] ||
				imageData.data[index * 4 + 2] != testPoint.value[2])
				return false;
		};

		return true;
	}

	private static IsPixelDark(imageData: ImageData, x: number, y: number): boolean {
		return imageData.data[(x + y * imageData.width) * 4] == 0;
	}

	private static ParseGraph(imageData: ImageData, enrolled: number, parsedPoints: number[]): void {
		let rawBarWidth: number[] = new Array(11);

		for (let i = 0; i < 10; i++) {
			let width = 51;
			for (; this.IsPixelDark(imageData, width, 51 + 34 * i); width++);
			width -= 51;

			// U prvního řádku je kromě běžné hodnoty 0-9 navíc speciální
			// hodnota "nebyl hodnocen" znázorněna oranžově, je proto potřeba
			// tento první řádek speciálně analyzovat
			if (i == 0) {
				// Pokud má řádek šířku 1 (je vidět jen černý obrys konce) přepokládáme
				// že jde o hodnotu "nebyl hodnocen"
				// Jde vyložene o edge case, který by asi nidky neměl nastat
				if (width <= 1) {
					rawBarWidth[0] = 1;
					rawBarWidth[1] = 0;
					continue;
				}

				let nanWidth = 51 - 2 + width;
				for (; Math.abs(imageData.data[(nanWidth + 52 * imageData.width) * 4] - 170) < 30; nanWidth--);

				if (imageData.data[(nanWidth + 52 * imageData.width) * 4] != 0)
					nanWidth++;

				nanWidth -= 50;
				width -= nanWidth;
				rawBarWidth[0] = nanWidth;
			}

			rawBarWidth[i + 1] = width;
		}

		let widthSum = 0;
		rawBarWidth.forEach((width): number => widthSum += width);

		let points: { pos: number; accuracy: number; count: number}[] = new Array(rawBarWidth.length);

		for (let i = 0; i < rawBarWidth.length; i++) {
			let countRaw = rawBarWidth[i] / widthSum * enrolled;
			points[i] = {
				pos: i,
				accuracy: Math.abs(countRaw - Math.round(countRaw)),
				count: Math.round(countRaw)
			};
		}

		let pointsSum = 0;
		points.sort((a, b): number => a.accuracy - b.accuracy);
		for (let i = 0; i < points.length; i++){
			parsedPoints[points[i].pos] = points[i].count;
			pointsSum += points[i].count;
		}

		if (pointsSum > enrolled) parsedPoints[points[10].pos] = enrolled - (pointsSum - points[10].count);
	}

	private static ParseNumber(imageData: ImageData, startX: number, startY: number): number {
		let parsedNumber: number = null;

		while (startX + 6 <= imageData.width && startY + 8 <= imageData.height) {
			let digit = this.ParseDigit(imageData, startX, startY);
			if (digit == null) break;

			if (parsedNumber == null) parsedNumber = 0;
			parsedNumber *= 10;
			parsedNumber += digit;

			startX += 7;
		}

		return parsedNumber;
	}

	private static ParseDigit(imageData: ImageData, startX: number, startY: number): number {
		if (startX + 6 > imageData.width || startY + 8 > imageData.height)
			throw new Error(`Cannot parse digit - out of bounds`);

		if (this.IsPixelDark(imageData, startX + 2, startY + 1)) return 1;
		if (this.IsPixelDark(imageData, startX + 0, startY + 7)) return 2;
		if (this.IsPixelDark(imageData, startX + 5, startY + 7)) return 4;
		if (this.IsPixelDark(imageData, startX + 3, startY + 5)) return 7;
		if (this.IsPixelDark(imageData, startX + 0, startY + 0)) return 5;
		if (this.IsPixelDark(imageData, startX + 3, startY + 4)) return 9;
		if (this.IsPixelDark(imageData, startX + 2, startY + 4)) return 0;
		if (this.IsPixelDark(imageData, startX + 0, startY + 3)) return 6;
		if (this.IsPixelDark(imageData, startX + 1, startY + 4)) return 8;
		if (this.IsPixelDark(imageData, startX + 2, startY + 0)) return 3;

		return null;
	}
}
