import express from "express"
import cors from "cors"
import { config } from "./config/env"

import saveRoutes from "./routes/save"
import userRoutes from "./routes/user"

const app = express()
app.use(cors())
app.use(express.json())

const port = config.port

app.use("/api/save", saveRoutes)
app.use("/api/user", userRoutes)

app.get("/health", (_, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
