// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.x += this.speed * dt;
    
    if (this.x > 600) {
        this.x = -150;
        this.speed = 150 + Math.floor(Math.random() * 550);
    }

    // Collision 
    if (player.x < this.x + 50 &&
        player.x + 30 > this.x &&
        player.y < this.y + 20 &
        player.y + 25 > this.y) {
        player.x = 200;
        player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    
    if (this.y > 370) {
        this.y = 370;
    }
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.y < 0) {
        this.x = 200;
        this.y = 400;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keys) {
    
    if (keys == 'left') {
        this.x -= this.speed + 50;
    }
    if (keys == 'up') {
        this.y -= this.speed  + 30;
    }
    if (keys == 'right') {
        this.x += this.speed + 50;
    }
    if (keys == 'down') {
        this.y += this.speed + 30;
    }
   
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var enemies = [70, 150, 230];
var player = new Player(200, 400, 50);
var enemy;

enemies.forEach(function(position) {
    enemy = new Enemy(0, position, 150 + Math.floor(Math.random() * 550));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});