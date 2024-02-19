const express = require('express')
const addDays = require('date-fns')

const app = express()
app.get('/', (request, response) => {
  const date = new Date()
  const newDate = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100,
  )
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  )
})
module.exports = app
