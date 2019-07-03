import { GraphData } from "../GraphData";
import { GraphImageParser } from "./GraphImageParser";
import { GraphUrlParser } from "./GraphUrlParser";
import { GraphCourseParser } from "./GraphCourseParser";

export class GraphParser{
	public static FromImage(image: HTMLImageElement): GraphData{
		return GraphImageParser.GetGraphData(image);
	}

	public static async FromUrl(url: string): Promise<GraphData>{
		return GraphUrlParser.GetGraphData(url);
	}

	public static async ByCourseId(courseId: number): Promise<GraphData>{
		return GraphCourseParser.GetGraphData(courseId);
	}
}