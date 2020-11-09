const express = require('express')
const app = express()

const PORT = 3000

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

app.use('/dashboard',require('./routes/dashboard'))

app.listen(PORT,console.log(`listening to port ${PORT}`))