const express = require('express')
const app = express()
var cors = require('cors')
const port = 3002;
const {connect, con} = require('./mySqlConnect');


app.use(cors())
app.use('/api/onboard',require('./routes/onboard'));


connect();
app.get('/', (req, res) => {
    res.send('How to work is goin on');
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  