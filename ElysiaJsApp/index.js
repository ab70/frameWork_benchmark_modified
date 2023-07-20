import { Elysia } from "elysia";
import initialRoutes from "./routes/api";

const app = new Elysia()

initialRoutes(app)
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
