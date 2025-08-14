const { v4: uuidv4 } = require('uuid');
let players = [];

exports.addPlayer = ({ name, team, position}) => {
    const newPlayer = {
        id: uuidv4(),
        name: name,
        team: team,
        position: position,
    }
    players.push(newPlayer);
    return newPlayer;
};

exports.getAllPlayers = () => players;