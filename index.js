const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('CI Helper Bot is running!');
});

app.listen(port, () => {
    console.log(`CI Helper Bot listening at http://localhost:${port}`);
});