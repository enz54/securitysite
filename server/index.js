const express = require('express');
const app = express();

<<<<<<< HEAD
const routes = require('./routes')
app.use(express.static('public'));
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
});

app.use('/', routes());

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Our app is running on port ${PORT}`))
=======
app

const port = 3000;
app.listen(port, ()=> console.log(`app is listening at port: ${port}`)
);
>>>>>>> 4abf87d3bac6b9734edce570e2ca97aa0434c358
