const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('hello'));
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Our app is running on port ${PORT}`))