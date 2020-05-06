const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const talkRubbish = require('./talkRubbish')
const port = 3000

const hb = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    keep: function (v1, v2) { return (v1 === v2) }
  }
})

app.engine('handlebars', hb.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const results = talkRubbish(req.body.jobs)
  const jobs = req.body.jobs
  res.render('index', { results: results, jobs: jobs })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})