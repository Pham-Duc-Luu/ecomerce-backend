const app = require("./src/index");

const port = process.env.PORT || 5055

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on("SIGINT", () => {
    server.close(() => console.log("exit"))
})