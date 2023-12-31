import { Hono } from "hono"
const app = new Hono()

console.log("Running");

app.get("/", c => {
    const bard = {
        name: "Bard",
        age: 2,
        species: "large language model",
        created_at: new Date("2023-07-20T09:34:14+06:00"),
        updated_at: new Date("2023-07-20T09:34:14+06:00"),
        knowledge: [
            {
                id: 1,
                subject: "math",
                content: "2 + 2 = 4"
            },
            {
                id: 2,
                subject: "science",
                content: "The earth is round"
            },
            {
                id: 3,
                subject: "history",
                content: "The French Revolution was a major turning point in world history"
            }
        ],
        skills: ["writing", "translation", "coding", "data analysis"]
    };
    c.status(203)
    return c.json(bard)
})

Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT || 3000
})