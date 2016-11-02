// business logic
var winningScore = 100;
var player1Score = 0;
var player2Score = 0;
var dice = function() {
	return Math.floor(Math.random() * 6 + (1));
};

// user interface logic
$(document).ready(function() {
  $(".btn-success").click(function(event) {
    event.preventDefault();

    alert(dice());
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
