import { GraphData } from "../GraphData";
import { GraphImageParser } from "./GraphImageParser";
import { GraphUrlParser } from "./GraphUrlParser";
import { GraphCourseParser } from "./GraphCourseParser";

/**
 * Analyzátor histogramu
 */
export class GraphParser{
	/**
	 * Analyzovat data histogramu z obrázku
	 * @param image Obrázek histogramu
	 */
	public static FromImage(image: HTMLImageElement): GraphData{
		return GraphImageParser.GetGraphData(image);
	}

	/**
	 * Analyzovat data histogramu podle adresy obrázku
	 * @param url Adresa obrázku histogramu
	 */
	public static async FromUrl(url: string): Promise<GraphData>{
		return GraphUrlParser.GetGraphData(url);
	}

	/**
	 * Analyzovat data histogramu podle Id otevřeného předmětu
	 * @param courseId ID otevřeného předmětu
	 */
	public static async ByCourseId(courseId: number): Promise<GraphData>{
		return GraphCourseParser.GetGraphData(courseId);
	}
}
