// importing express
const express = require('express')
// starting express
const app = express()

app.get('/message/:id', (request, response) => {
  response.send(`Id da mensagem: ${request.params.id}`)
})

// API Port
const PORT = 3333
app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`)
})
