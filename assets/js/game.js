// Game States
// "WIN" - Player robot has defeated all enemy robots
// * Fight all ennemy robots
// * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// random number assigned to health

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var getPlayerName = function () {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

var enemy = [
  {
    name: "Roberto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];

var fightOrSkip = function () {
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );
  promptFight = promptFight.toLowerCase();

  //if user picks skip confirm and then stop the loop
  if (promptFight === "skip") {
    //confirm the user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave the fight
    if (confirmSkip) {
      window.alert(
        playerInfo.name + " has decided to quit this fight. Goodbye"
      );
      //subtract money from player
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      // Would you like to refill, upgrade or leave the store?
      // Prompt user to input one of the above options
      return true;
    } // if no (false), ask question agin about running fight()
  }
  return false;
};

// fight function expression
var fight = function (enemy) {
  // player turn functionn
  var isPlayerTurn = true;
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  //execute a while loop as long as enemy robot is alive
  while (enemy.health > 0 && playerInfo.health > 0) {
    if (fightOrSkip()) {
      break;
    }
    //remove enemy.health from playerInfo.attack
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemy.attack variable
    playerInfo.health = Math.max(playerInfo.health - enemy.attack);
    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining."
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  }

  isPlayerTurn = !isPlayerTurn;
  }
};

// Add endGame() function
var endGame = function () {
  // if player is still alive, player wins
  if (playerInfo.health > 0) {
    window.alert("Player is alive. Great Job, you've survived the game!");
  } else {
    window.alert("You've lost all your health, your robot lost the battle");
  }

  //ask if the player would like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// add shop() function
var shop = function () {
  //ask the player what they would like to do?
  var showOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attach, or LEAVE the store? Please enter 1 for Refill, 2 for Upgrade, and 3 for Leave."
  );

  // convert string to Integer
  showOptionPrompt = parseInt(showOptionPrompt);

  // switch for answers to above prompt
  switch (showOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;

    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store");
      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

//function to start a new game
var startGame = function () {
  //reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemy.length; i++) {
    if (playerInfo.health > 0) {
      //let user know what round they are in
      window.alert("Welcome to Robot Gladiators! Round " + (1 + i));

      //pick the enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemy[i];

      // reset the enemy.health to 50
      pickedEnemyObj.health = randomNumber(40, 60);

      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemy.length - 1) {
        // storeConfrim, prompt if the user would like to visit the store
        var storeConfirm = window.confirm("Would you like to visit the store?");

        // if yes, take them to the shop() function
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot player in battle! Game Over!");
      break;
    }
  }
  endGame();
};

startGame();
