import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello TypeScript!")
})

app.get("/health", (_, res) => {
    res.send(200)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
