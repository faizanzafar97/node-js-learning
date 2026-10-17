import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile/:username', (req, res) => {
  res.send(`hello ${req.params.username}`)
})
app.get('/profile', (req, res) => {
  res.send(`hello `)
})



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})