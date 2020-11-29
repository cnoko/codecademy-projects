const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
     {
      firstName: 'Pete', 
      lastName: 'Wheeler', 
      age: 23
    },
     {
      firstName: 'Broncos', 
      lastName: 'Smith', 
      age: 32
    },
    {
      firstName: 'John',
      lastName: 'Taylor',
      age: 27
    }
  ],
  _games: [
    {
      oppnonent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
     {
      oppnonent: 'John',
      teamPoints: 12,
      opponentPoints: 17
    },
     {
      oppnonent: 'Pete',
      teamPoints: 32,
      opponentPoints: 41
    },
    
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
      this._players.push( {firstName, lastName, age});
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({opponent, teamPoints, opponentPoints});
  }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 21, 31);
team.addGame('Ivon', 55, 45);
team.addGame('Joseph', 100, 98);
console.log(team.players);
console.log(team.games);
