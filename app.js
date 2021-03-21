// Declare a team object
const team = {
    //Nest a players key and games key with arrays set as values.
    _players: [
      {firstName: `Michael`, lastName: 'Rider', age: 28},
      {firstName: `Taylor`, lastName: 'Sibley', age: 27},
      {firstName: `Tyler`, lastName: 'Mahaney', age: 29}
    ],
    _games: [
        {opponent: 'pdX', teamPoints: 40, oponnentPoints: 30},
        {opponent: 'Salem', teamPoints: 45, oponnentPoints: 35},
        {opponent: 'Beaverton', teamPoints: 50, oponnentPoints: 55},
    ],
    // get methods for players and games
    get players() {return this._players},
    get games() {return this._games},
    // method to add players to the _players property/key
    addPlayer (firstName, lastName, age) {
      let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
      };
      this._players.push(player);
    },
    // method to add games to the _games property/key
    addGame (opponent, teamPoints, opponentPoints) {
      let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
      };
      this._games.push(game);
    },
  };
  
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 24);
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team.players); //Test get players and addPlayer method
  
  team.addGame(`Lebowski's Urban UnderAchievers`,0,100);
  team.addGame("Jets",30,30);
  team.addGame("Sharks",40,40);
  console.log(team.games); // test get teams and addGames method