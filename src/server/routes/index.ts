import { FRONTEND_ROUTE, HELLO_MESSAGE } from "../../shared/routes/appRoutes";
import index from '../../app/index.html'
import { singin } from "../controllers/login.controller";

export const routes = {
    [FRONTEND_ROUTE]: index,
    [HELLO_MESSAGE]: singin
}
