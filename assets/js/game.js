var playerName = window.prompt("What is your robot's email");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at onnce like this:
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Bruce Banner";
var enemyHealth = 50;
var enemyAttack = 12;

// function expression
var fight = function () {
  window.alert("Welcome to Robot Gladiators");

  //Subtract value of 'playerAttack' from value 'enemyHealth'
  enemyHealth = enemyHealth - playerAttack;

  //Log a resulting message to the console so we know that it worked
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

  //check enemy;s health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  //Subtract value 'enemyAttack' from value 'playerHealth'
  playerHealth = playerHealth - enemyAttack;

  //Log resulting message to the console
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

  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(
      playerName +
        " still has " +
        playerHealth +
        " health remaining..get back there!"
    );
  }
};

fight();
