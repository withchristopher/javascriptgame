// Game States
// "WIN" - Player robot has defeated all enemy robots
// * Fight all ennemy robots
// * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var enemyNames = ["Roberto", "Android", "Blackberry", "iOS"];
var playerNames = ["Bruce", "Panthar", "Stark"];

console.log(enemyNames);
var playerName = window.prompt("What is your robot's email");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at onnce like this:
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Bruce Banner";
var enemyHealth = 50;
var enemyAttack = 12;

// function expression
var fight = function () {
  window.alert("Welcome to Robot Gladiators");

  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );
  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
      window.alert(playerName + " has decided to quit this fight. Goodbye");
      playerMoney = playerMoney - 2;
    } // if no (false), ask question agin about running fight()
    else {
      fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
};

//fight();
