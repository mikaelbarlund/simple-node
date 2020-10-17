const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send('Hello World!'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
