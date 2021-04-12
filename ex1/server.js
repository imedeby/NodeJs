const express = require('express');
const comics_router = require('./routers/comic');
const app = express();
const port = process.env.PORT || 5000 ;

app.use(express());
app.use('/api/comics',comics_router);




app.listen(port, () => console.log(`Listening on ${port} ...`));