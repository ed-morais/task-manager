const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware

app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Task manager app`)
})

app.post('/', (req, res) => {
  res.send('mary Jane')
})

app.use('/api/v1/tasks', tasks)

const port = 3000
app.listen(port, console.log(`Server is listening on port ${port}...`))
