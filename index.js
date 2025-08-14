const express = require('express');
const app = express();
const PORT = 8080;

const players = [
    { id: 1, name: 'Lebron James', team: "Lakers", position: 'SF' },
    { id: 2, name: 'Stephen Curry', team: 'Warriors', position: 'PG'},
    { id: 3, name: 'Amen Thompson', team: 'Rockets', position: 'SG'}
]

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World from Basketball Finance Tracker');
});

app.get('/players', (req, res) => {
    res.json(players);
})

app.post('/players', (req, res) => {
    console.log(req.body)
    const { name, team, position } = req.body;
    if (!name | !team | !position) {
        return res.status(404).json({ error: 'Missing required fields'});
    }
    const newPlayer = { id: players.length + 1, name, team, position };
    players.push(newPlayer);
    res.status(201).json(newPlayer);
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});