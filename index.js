const express = require('express');
const app = express();
const PORT = 8080;

const players = [
    { id: 1, name: 'Lebron James', team: "Lakers", position: 'SF' },
    { id: 2, name: 'Stephen Curry', team: 'Warriors', position: 'PG'},
    { id: 3, name: 'Amen Thompson', team: 'Rockets', position: 'SG'}
]

app.get('/', (req, res) => {
    res.send('Hello World from Basketball Finance Tracker');
});

app.get('/players', (req, res) => {
    res.json(players);
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});