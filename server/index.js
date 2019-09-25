const express = require('express');
const app = express();

const routes = require('./routes')
app.use(express.static('public'));
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
});

app.use('/', routes());

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Our app is running on port ${PORT}`))