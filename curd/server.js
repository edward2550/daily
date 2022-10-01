console.log('May node be with you ')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs')


app.listen(3000, function(){
    console.log('listening on 3000')
})

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb+srv://feeder:feedingallday@cluster0.nn55r.mongodb.net/?retryWrites=true&w=majority',{ useUnifiedTopology : true})
.then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(bodyParser.urlencoded({extended: true}))
    app.get('/', (req,res) => {
      const cursor = db.collection('quotes').find().toArray()
        .then(results => {
          res.render('index.ejs',{quotes: results})
          console.log(results)
        })
        .catch(error => console.error(error))  
      console.log(cursor)
        res.sendFile('/Users/edwardnunez/daily/daily/curd' + '/index.html')
    })
    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
    app.listen(/* ... */)
  })
  .catch(error => console.error(error))




