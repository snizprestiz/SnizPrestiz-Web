import { GraphData } from "../GraphData";
import { GraphImageParser } from "./GraphImageParser";
import { GraphUrlParser } from "./GraphUrlParser";
import { GraphCourseParser } from "./GraphCourseParser";

export class GraphParser{
	public static FromImage(image: HTMLImageElement): GraphData{
		return GraphImageParser.GetGraphData(image);
	}

	public static FromUrl(url: string, callback: (data: GraphData) => void): void{
		GraphUrlParser.GetGraphData(url, callback);
	}

	public static ByCourseId(courseId: number, callback: (data: GraphData) => void): void{
		GraphCourseParser.GetGraphData(courseId, callback);
	}
}