import { sqlExecuter } from "../../modules/database";
 
export default async (req: any, res: any) => {
 
	const data = await sqlExecuter.any(
               "select * FROM memo"
        );
	res.status(200).json({
		data
	});
	console.log(data)
};