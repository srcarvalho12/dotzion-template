import { serve, type BunRequest } from "bun";
import { routes } from "./server/routes";
import { HELLO_MESSAGE } from "./shared/routes/appRoutes";

const port = Number(process.env.PORT || 8088);

const app = serve({
    port,
    routes,
    development: true
})

console.log(`Server running on ${app.url}`);
