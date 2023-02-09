// importing express
const express = require("express")
const routes = require("./routes")


// starting express
const app = express()
app.use(express.json())

app.use(routes)

// API Port
const PORT = 3333
app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`)
})
