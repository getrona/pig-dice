// business logic
function Player(score, winningScore) {
  this.score = 0;
  this.winningScore = 100;
}

var player1 = new Player ();
var player2 = new Player ();

Player.prototype.singleRoll = function() {
  return Math.floor(Math.random() * 6 + (1));
};
Player.prototype.addScore=function(score){
  return this.score=+score;
}

for()
function() {
  var roll = dice();
    if(roll > 1) {
      player1.addScore(roll);
    }
    return player1Score;
  };

  var player2Game = function() {
      var roll = dice();
      if(roll > 1) {
        player2Score += roll;
      }
    return player2Score;
  };

// user interface logic

$(document).ready(function() {
  $(".btn-success").click(function(event) {
    event.preventDefault();
      while (player1.score <= 100 && player2.score <= 100) {

      }
  });
});



// do {
//   var player1Game = function() {
//     do {
//         dice();
//         if(dice > 1) {
//         player1Score += dice;
//         var decision = confirm("Do you want to continue or hold?");
//       }
//       while (decision === true);
//     }
//     if(decision === false) {
//       player2Game();
//     }
//   };
//
//   var player2Game = function() {
//     do {
//         dice();
//         if(dice > 1) {
//         player2Score += dice;
//         var decision = confirm("Do you want to continue or hold?");
//       }
//       while (decision === true);
//     }
//     if(decision === false) {
//       player1Game();
//     }
//   };
// }
// while (player1Score !== 100 || player2Score !== 100);




    //
    // while (player1Score <= 100 || player2Score <= 100) {
    //   player1Game();
    //   var decision = confirm("Player 1, Do you want to continue or hold?");
    //   if (decision === true) {
    //     player1Game();
    //   } else {
    //       player2Game();
    //       var decision = confirm("Player 2, Do you want to continue or hold?");
    //       if (decision === true) {
    //         player2Game();
    //       } else {
    //         player1Game();
    //       }
    //     }
    // }
