import express from "express"
import mockRouter from "./routes/mock.router.js"

const APP = express()

const PUERTO = 8080


APP.use("/api/mocks", mockRouter )

APP.listen(PUERTO,() => {
    console.log(`escuchando el puerto ${PUERTO}`)
})
