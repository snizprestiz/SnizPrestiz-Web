import { GraphUrlParser } from "./GraphUrlParser";
import { LoggedUser } from "../../LoggedUser";
import { GraphData } from "../GraphData";

export class GraphCourseParser{
	public static GetGraphData(courseId: number, callback: (data: GraphData) => void): void{
		GraphUrlParser.GetGraphData(
			`${LoggedUser.WisProxyUrl}/FIT/st/course-g.php?ects=1&id=${courseId}`,
			callback);
	}
}