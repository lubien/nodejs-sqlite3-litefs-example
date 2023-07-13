const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const dbConfig = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(dbConfig);

app.get('/', async (req, res) => {
  await knex('users').insert({name: `User ${new Date().getTime()}`})
  const users = await knex('users').select('name')
  res.send(users.map(u => u.name).join(', '))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})