var lastFired = 0;

class playGame extends Phaser.Scene {
  
  constructor() {
    super("PlayGame");
    this.enemies = [];
  
    this.playersSprite = {};
    this.playerPreviousLocation = null
  }

  preload() {


    this.load.image("bird", "assets/ghost-small.png");

    this.load.image('pin', "../assets/cross-small.png");
    this.load.image('mountains-back', "../assets/fenc-small.png");

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#697e96");
    this.load.audio('backgroundSound', 'assets/bg-music.mp3', {
         instances: 1
    });

    this.score = 0;

    
  }

  create() {
    var music = this.sound.add('backgroundSound');

    music.setLoop(true)

    music.play()

    var self = this;
    this.mountainsBack = this.add.tileSprite(0, game.config.height + 150, 5000, 500, 'mountains-back');


    this.socket = io()

    
    this.socket.on('currentPlayers', function (players) {
      Object.keys(players).forEach(function (id) {

        var player = players[id];
        if(player.playerId in self.playersSprite){
          self.playersSprite[player.playerId].x = player.x;
          self.playersSprite[player.playerId].y = player.y;
        }else {
          if(player.playerId === self.socket.id) {
            self.plotSelf(player);
          }else {
            self.plotOther(player);
          }
        }

        

      });

      self.physics.add.overlap(self.enemies, self.playersSprite[self.socket.id], self.stopTheGame, null, self);
      

    });

    
    this.socket.on('playerMoved', function (player) {
        if(player.playerId in self.playersSprite){
          self.playersSprite[player.playerId].x = player.x;
          self.playersSprite[player.playerId].y = player.y;

        }else {
          console.log(player)
          console.log("not found^")
        }
    });

    this.socket.on('playerRemoved', function (playerId) {
        if(playerId in self.playersSprite){
          var playerSprite = self.playersSprite[playerId];
          playerSprite.destroy();
          delete self.playersSprite[playerId];
        }else {
          console.log(player)
          console.log("not found^")
        }
    });

    this.socket.on('newPlayer', function (player) {
        if(player.playerId in self.playersSprite){
          self.playersSprite[player.playerId].x = player.x;
          self.playersSprite[player.playerId].y = player.y;
        }else {
          self.plotOther(player);
        }
        
    });


    this.socket.on('enemyMoved', function (enemy) {
    });

    this.socket.on('enemyCreated', function (enemy) {
      console.log(enemy);
      self.addEnemy(enemy)
      
      self.physics.add.overlap(self.enemies, self.playersSprite[self.socket.id], self.stopTheGame, null, self);
        
    });

    this.socket.on('gameOver', function () {
        self.stopTheGame(null, null)
    });

    this.physics.world.on('worldbounds', this.onWorldBounds, this)
    
  }

  onWorldBounds(data) {
    if(data.gameObject.body.blocked.down) {
      this.stopTheGame(null, null);
    }
  }

  stopTheGame(enemies, bird) {
    
    let gameOverScene = new GameOverScene()
    this.socket.disconnect();
    this.scene.start('GameOverScene')
    this.scene.stop('PlayGame')
  }
  



  update(time) {
      var playerSprite = this.playersSprite[this.socket.id];

      if(this.socket != null && playerSprite != null){
          if(this.cursorKeys.space.isDown || this.input.activePointer.isDown) {
            playerSprite.body.setVelocity(0, -200)
          }
          
          if (this.playerPreviousLocation != null  && (playerSprite.x != this.playerPreviousLocation.x || playerSprite.y != this.playerPreviousLocation.y))
            this.socket.emit('movementChanged', {x: playerSprite.x, y: playerSprite.y, playerId: this.socket.id})
          
          this.playerPreviousLocation = {x: playerSprite.x, y: playerSprite.y,}
      }
      var self = this;
      Object.keys(this.enemies).forEach(function (id) {
        var enemy = self.enemies[id];
        if(enemy.x <= 0 && enemy.x >= -10){
          self.score += 1;
          var container = self.playersSprite[self.socket.id];
          var score = container.getAt(1);
          
          score.setText("Score: " + self.score);
          delete self.enemies[id];
        }
        

      });


      
    this.mountainsBack.tilePositionX += 5;
  }

  plotSelf(player){
    var container = this.add.container(0, 0);
    container.setExclusive(true);
    
    this.physics.world.enable(container);

    var playerSprite = this.physics.add.sprite(0, 0, 'bird');
    playerSprite.setOrigin(0,0);

    container.body.setGravity(0, 500);
    container.body.collideWorldBounds = true;
    container.body.onWorldBounds = true
    container.body.bounce.set(.3);

    var score = this.add.text(0, -20, "Score: 0", {font: "16px Arial", fill: "#000000"});
    
    container.add([playerSprite, score]);
    this.playersSprite[player.playerId] = container;
  }

  plotOther(player){
    var container = this.add.container(0, 0);
    container.setExclusive(true);
    
    this.physics.world.enable(container);

    var playerSprite = this.physics.add.sprite(0, 0, 'bird');
    playerSprite.setOrigin(0, 0);
    container.body.x = player.x;
    container.body.y = player.y;
    playerSprite.alpha = .1;

    var score = this.add.text(0, -20, "", {font: "16px Arial", fill: "#000000"});
    
    container.add([playerSprite, score]);

    this.playersSprite[player.playerId] = container;
  }

  addEnemy(enemy) {
    var pin = this.physics.add.sprite(enemy.x, enemy.y, 'pin');
    pin.setVelocity(-100, 10);
    this.enemies.push(pin);
  }
}




