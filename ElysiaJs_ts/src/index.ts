import { Elysia } from "elysia";
import initialRoutes from "./routes/api";
const app = new Elysia()
// app.get("/", () => {
//   for (let i = 0; i < 100; i++) {
//   }
//   return {
//     name: "Bard",
//     age: 2,
//     species: "large language model",
//     created_at: new Date("2023-07-20T09:34:14+06:00"),
//     updated_at: new Date("2023-07-20T09:34:14+06:00"),
//     knowledge: [
//       {
//         id: 1,
//         subject: "math",
//         content: "2 + 2 = 4"
//       },
//       {
//         id: 2,
//         subject: "science",
//         content: "The earth is round"
//       },
//       {
//         id: 3,
//         subject: "history",
//         content: "The French Revolution was a major turning point in world history"
//       }
//     ],
//     skills: ["writing", "translation", "coding", "data analysis"]
//   }
// })
initialRoutes(app)
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
