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
  board[0].push(new Rook(0,0,0),new Knight(0,0,1),new Bishop(0,0,2),new Queen(0,0,3),new King(0,0,4),new Bishop(0,0,5),new Knight(0,0,6),new Rook(0,0,7));
  board[1].push(new Pawn(0,1,0),new Pawn(0,1,1),new Pawn(0,1,2),new Pawn(0,1,3),new Pawn(0,1,4),new Pawn(0,1,5),new Pawn(0,1,6),new Pawn(0,1,7));
  
  /*create nulls for non occupied spaces (seems to be unnecessary in javascript)
  for (var i=2;i<6;i++){
    for(var j=0;j<8;j++){
      board[i].push(0);
    }
  }
  */
  
  //white pieces
  board[6].push(new Pawn(1,6,0),new Pawn(1,6,1),new Pawn(1,6,2),new Pawn(1,6,3),new Pawn(1,6,4),new Pawn(1,6,5),new Pawn(1,6,6),new Pawn(1,6,7));
  board[7].push(new Rook(1,7,0),new Knight(1,7,1),new Bishop(1,7,2),new Queen(1,7,3),new King(1,7,4),new Bishop(1,7,5),new Knight(1,7,6),new Rook(1,7,7));
  
  console.log(board);
  return board;
}

function initBlackPawns(){
  for x in board[6]
  return array
}
function initWhitePawns(){
  return array
}

//pieces
function Rook(team,x,y) {
  this.team = team;
  this.x = x
  this.y = y
}
function Knight(team,x,y) {
  this.team = team;
  this.x = x
  this.y = y
}
function Bishop(team,x,y) {
  this.team = team;
  this.x = x
  this.y = y
}
function King(team,x,y) {
  this.team = team;
  this.x = x
  this.y = y
}
function Queen(team,x,y) {
  this.team = team;
  this.x = x
  this.y = y
}
function Pawn(team,x,y) {
  this.team = team;
  this.firstmove = false;

  this.x = x
  this.y = y
}

var getPossibleMoves = function(board, piece){
  if (piece instanceof Rook){


  } else if (piece instanceof Knight){


  } else if (piece instanceof Bishop){


  } else if (piece instanceof King){


  } else if (piece instanceof Queen){


  } else if (piece instanceof Pawn){


  }






}


var movePiece = function(piece){
  //piece.team

};

// .__                                          .__                                                            __      __  .__                    .__    .__  __      __                        __  .__                  
// |  |__   ___________   ____   ______ __  _  _|  |__   ___________   ____   __  _  __ ____      ____   _____/  |_  _/  |_|  |__   ____     _____|  |__ |__|/  |_  _/  |_  ____   ____   _____/  |_|  |__   ___________ 
// |  |  \_/ __ \_  __ \_/ __ \ /  ___/ \ \/ \/ /  |  \_/ __ \_  __ \_/ __ \  \ \/ \/ // __ \    / ___\_/ __ \   __\ \   __\  |  \_/ __ \   /  ___/  |  \|  \   __\ \   __\/  _ \ / ___\_/ __ \   __\  |  \_/ __ \_  __ \
// |   Y  \  ___/|  | \/\  ___/ \___ \   \     /|   Y  \  ___/|  | \/\  ___/   \     /\  ___/   / /_/  >  ___/|  |    |  | |   Y  \  ___/   \___ \|   Y  \  ||  |    |  | (  <_> ) /_/  >  ___/|  | |   Y  \  ___/|  | \/
// |___|  /\___  >__|    \___  >____  >   \/\_/ |___|  /\___  >__|    \___  >   \/\_/  \___  >  \___  / \___  >__|    |__| |___|  /\___  > /____  >___|  /__||__|    |__|  \____/\___  / \___  >__| |___|  /\___  >__|   
//      \/     \/            \/     \/               \/     \/            \/               \/  /_____/      \/                  \/     \/       \/     \/                       /_____/      \/          \/     \/       

var board = initStartingBoard();


