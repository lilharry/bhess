//______ _   _  _____ _____ _____ 
//| ___ \ | | ||  ___/  ___/  ___|
//| |_/ / |_| || |__ \ `--.\ `--. 
//| ___ \  _  ||  __| `--. \`--. \
//| |_/ / | | || |___/\__/ /\__/ /
//\____/\_| |_/\____/\____/\____/ 
//
                                
//init board functions
function Create2DArray(rows) {
  var arr = [];
  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }
  return arr;
}

function initStartingBoard(){
  board = Create2DArray(8);
  
  //black pieces
  board[0].push(new Rook(0),new Knight(0),new Bishop(0),new Queen(0),new King(0),new Bishop(0),new Knight(0),new Rook(0));
  board[1].push(new Pawn(0),new Pawn(0),new Pawn(0),new Pawn(0),new Pawn(0),new Pawn(0),new Pawn(0),new Pawn(0));
  //white pieces
  board[6].push(new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1),new Pawn(1));
  board[7].push(new Rook(1),new Knight(1),new Bishop(1),new King(1),new Queen(1),new Bishop(1),new Knight(1),new Rook(1));
  
  //console.log(board);
  return board;
}


//pieces
function Rook(team) {
  this.team = team;
}
function Knight(team) {
  this.team = team;
}
function Bishop(team) {
  this.team = team;
}
function King(team) {
  this.team = team;
}
function Queen(team) {
  this.team = team;
}
function Pawn(team) {
  this.team = team;
}

// .__                                          .__                                                            __      __  .__                    .__    .__  __      __                        __  .__                  
// |  |__   ___________   ____   ______ __  _  _|  |__   ___________   ____   __  _  __ ____      ____   _____/  |_  _/  |_|  |__   ____     _____|  |__ |__|/  |_  _/  |_  ____   ____   _____/  |_|  |__   ___________ 
// |  |  \_/ __ \_  __ \_/ __ \ /  ___/ \ \/ \/ /  |  \_/ __ \_  __ \_/ __ \  \ \/ \/ // __ \    / ___\_/ __ \   __\ \   __\  |  \_/ __ \   /  ___/  |  \|  \   __\ \   __\/  _ \ / ___\_/ __ \   __\  |  \_/ __ \_  __ \
// |   Y  \  ___/|  | \/\  ___/ \___ \   \     /|   Y  \  ___/|  | \/\  ___/   \     /\  ___/   / /_/  >  ___/|  |    |  | |   Y  \  ___/   \___ \|   Y  \  ||  |    |  | (  <_> ) /_/  >  ___/|  | |   Y  \  ___/|  | \/
// |___|  /\___  >__|    \___  >____  >   \/\_/ |___|  /\___  >__|    \___  >   \/\_/  \___  >  \___  / \___  >__|    |__| |___|  /\___  > /____  >___|  /__||__|    |__|  \____/\___  / \___  >__| |___|  /\___  >__|   
//      \/     \/            \/     \/               \/     \/            \/               \/  /_____/      \/                  \/     \/       \/     \/                       /_____/      \/          \/     \/       

var board = initStartingBoard();


