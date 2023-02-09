// importing express
const express = require('express')
// starting express
const app = express()

// API Port
const PORT = 3333
app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`)
})
