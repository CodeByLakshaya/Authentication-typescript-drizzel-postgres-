import { createServer } from "node:http";
import { createExpressApplication}from "./app/index.js";


async function main() {
    try{
        const app = createExpressApplication();
        const server = createServer(app);
        const PORT:number = 8080;

        server.listen(PORT, () => {
            console.log(` Http Server is running on port ${PORT}`);
        });
    }
    catch(error){
        console.error(error);
    }
}
main();