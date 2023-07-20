import { Elysia } from "elysia";
// const app = new Elysia()
import { userTestController } from "../../app/controllers/userController";

const userRoute = (app: Elysia) => {
    app.group("/user", app => app
        .get("/a", userTestController))
}



export default userRoute;
