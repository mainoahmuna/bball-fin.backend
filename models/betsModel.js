let bets = [];

exports.addBet = (bet) => {
  bets.push(bet);
  return bet;
};

exports.getAllBets = () => bets;