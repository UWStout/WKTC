ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.debug.debug',

	//Entities
	'game.entities.player',
	'game.entities.testTrigger',
	'game.entities.trigger',
	'game.entities.Highlight',
	'game.entities.textBox',
	'game.entities.menuClose',
	'game.entities.puzzleBox',
	'game.entities.matchingBox',
	'game.entities.matchingCard',
	'game.entities.RedVelvet',
	'game.entities.CoffeeToffee',
	'game.entities.Gingerbread',
	'game.entities.SugarCookie',
	'game.entities.SaltedCookie',
	'game.entities.dialPuzzle',
	'game.entities.MainMenu',
	'game.entities.StartButton',
	'game.entities.HowToPlay',
	'game.entities.credits',
	'game.entities.SuspectUI',
	'game.entities.WeaponUI',

	'game.levels.main',
	'game.levels.MainMenu',
	'game.levels.End',
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	windowBox:new ig.Image("media/TestImage.png"),
	frozen: false,
	currentPuzzle: null,

	puzzleOn: true,
	matchingOn: false,
	dialPuzzle: false,
	matchingArray: [0,0,1,1,2,2,3,3,4,4,5,5],
	card1: null,
	card2: null,
	matches: 0,
	closeWindow: false,
	cardTimer: new ig.Timer(),
	evidence: 0,
	susWinNum: 0,
	wepWinNum: 0,
	displayCredits: false,
	credits: new ig.Image('media/Credits.png'),
	displayHowTo: false,
	howTo: new ig.Image('media/HowTo.png'),


	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.W, 'up');
		ig.input.bind(ig.KEY.S, 'down');
		ig.input.bind(ig.KEY.A, 'left');
		ig.input.bind(ig.KEY.D, 'right');
		ig.input.bind(ig.KEY.E, 'action');
		ig.input.bind(ig.KEY.MOUSE1, 'click');

		this.loadLevel( LevelMainMenu );

		this.matchingArray = this.shuffle(this.matchingArray);

		this.cardTimer.set(.25);
		this.cardTimer.pause();

		this.susWinNum = Math.floor(Math.random() * 4);
		this.wepWinNum = Math.floor(Math.random() * 3);

		ig.log(this.susWinNum);
		ig.log(this.wepWinNum);
		

		
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		
		// Add your own, additional update code here

		//Camera Follow Code
		//May want to change later for bounds of the camera and other stuff, but is fine for now.
		var gameviewport = ig.game.screen;
		var gamecanvas = ig.system;
		var player = this.getEntitiesByType( EntityPlayer )[0];

		
		if(player != null){
			if(player.pos.x - gamecanvas.width / 2 > 0 && player.pos.x - gamecanvas.width / 2 < 32 * 16) {
				gameviewport.x = player.pos.x - gamecanvas.width / 2;
			}
			
			if(player.pos.y - gamecanvas.height / 2 > 0 && player.pos.y - gamecanvas.height / 2 < 32 * 10){
				gameviewport.y = player.pos.y - gamecanvas.height / 2;
			}
		}

		
		
		//Drag puzzle code
		/*if (ig.input.pressed('click') && this.puzzleOn == false){
			this.puzzleOn = true//!this.puzzleOn;
			//if (this.puzzleOn == true)
			//{
				ig.game.spawnEntity(EntityPuzzleBox, 448, gameviewport.y );
				ig.game.spawnEntity(EntityMenuClose, gameviewport.x + 200, gameviewport.y);
			//}
		}*/
		//Dial Puzzle Code
		/*if (ig.input.pressed('click') && this.dialPuzzle == false)
		{
			this.dialPuzzle = true;
			ig.game.spawnEntity(EntityPuzzleBox, 448, gameviewport.y );
			ig.game.spawnEntity(EntityMenuClose, gameviewport.x + 200, gameviewport.y);
			ig.game.spawnEntity(EntityDialPuzzle, 448, gameviewport.y);
		}*/
		/*
		//Matching Puzzle code
		if(ig.input.pressed('click') && this.matchingOn == false){
			this.matchingOn = true;
			ig.game.spawnEntity(EntityMatchingBox, 448, gameviewport.y);
			for(var i = 0; i < 12; i++){
				var card = ig.game.spawnEntity(EntityMatchingCard)
				card.coordX = i % 3;
				card.coordY = Math.trunc(i/3);
				card.matchNumber = this.matchingArray[i]
			}
			ig.game.spawnEntity(EntityMenuClose, gameviewport.x + 200, gameviewport.y);
		}

		if(this.card1 != null && this.card2 != null) {
			this.cardTimer.unpause();
			if(this.cardTimer.delta() >= 0.25) {
				if(this.card1.matchNumber == this.card2.matchNumber){
					this.card1.kill();
					this.card2.kill();
					this.card1 = null;
					this.card2 = null;
					this.matches++;
				}
				else{
					this.card1.currentAnim = this.card1.anims.idle;
					this.card2.currentAnim = this.card2.anims.idle;

					this.card1 = null;
					this.card2 = null;
				}
				this.cardTimer.reset();
				this.cardTimer.pause();
			}
		}

		if(this.matches == 6){
			//Still need to add the evidence connection
			this.currentPuzzle.kill();
			this.matches = 0;
			this.puzzleOn = false;
			this.matchingOn = false;
			this.closeWindow = true;
			ig.log("Puzzle Solved")
		}
		*/
	},
	
	draw: function() {

		
		// Draw all entities and backgroundMaps
		this.parent();

		if(this.displayCredits){
			this.credits.draw(64,32);
		}

		if(this.displayHowTo){
			this.howTo.draw(64,32);
		}

		
	},

	shuffle: function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
	  
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
	  
		  // Pick a remaining element...
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex -= 1;
	  
		  // And swap it with the current element.
		  temporaryValue = array[currentIndex];
		  array[currentIndex] = array[randomIndex];
		  array[randomIndex] = temporaryValue;
		}
	  
		return array;
	  }
		
});



// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 576, 384, 1 );

});
