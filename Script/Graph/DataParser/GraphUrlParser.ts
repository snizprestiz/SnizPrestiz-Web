import { GraphImageParser } from "./GraphImageParser";
import { GraphData } from "../GraphData";

/**
 * Analyzátor dat histogramu z URL adresy obrázku
 */
export class GraphUrlParser{
	public static async GetGraphData(url: string): Promise<GraphData>{
		return new Promise<GraphData>((resolve, reject): void => {
			let image = new Image();
			image.onload = (): void => resolve(GraphImageParser.GetGraphData(image));
			image.onerror = (): void => reject();
			image.crossOrigin = `use-credentials`;
			image.src = url;
		});
	}
}
