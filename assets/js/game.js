// Game States
// "WIN" - Player robot has defeated all enemy robots
// * Fight all ennemy robots
// * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name");
var playerHealth = 20;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at onnce like this:
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Android", "Blackberry", "iOS"];
var enemyAttack = 10;

// function expression
var fight = function(enemyName) {
    //execute a while loop as long as enemy robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt(
            "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
        );

        //if user picks skip confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm the user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to quit this fight. Goodbye");
                //subtract money from player
                playerMoney = playerMoney - 10;
                console.log('playerMoney', playerMoney);
                break;
            } // if no (false), ask question agin about running fight()
        }

        //remove enemyHealth from playerAttach
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
            break;
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
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    }
};

//for loop over enemyNames parameters
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        //let user know what round they are in
        window.alert("Welcome to Robot Gladiators! Round " + (1 + i));

        //pick the enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset the enemyHealth to 50
        enemyHealth = 50;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot player in battle! Game Over!");
        break;
    }
}