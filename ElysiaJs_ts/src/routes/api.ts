import { Elysia } from "elysia";

const app = new Elysia()
import userRoute from "./userRoute/userRoute";

const initialRoutes = (app: Elysia) => {
    userRoute(app)
}

export default initialRoutes