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

	'game.levels.main'
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
	matchingArray: [0,0,1,1,2,2,3,3,4,4,5,5],

	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.W, 'up');
		ig.input.bind(ig.KEY.S, 'down');
		ig.input.bind(ig.KEY.A, 'left');
		ig.input.bind(ig.KEY.D, 'right');
		ig.input.bind(ig.KEY.E, 'action');
		ig.input.bind(ig.KEY.MOUSE1, 'click');

		this.loadLevel( LevelMain );

		
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

		

		if(player.pos.x - gamecanvas.width / 2 > 0 && player.pos.x - gamecanvas.width / 2 < 32 * 16) {
			gameviewport.x = player.pos.x - gamecanvas.width / 2;
		}
		
		if(player.pos.y - gamecanvas.height / 2 > 0 && player.pos.y - gamecanvas.height / 2 < 32 * 10){
			gameviewport.y = player.pos.y - gamecanvas.height / 2;
		}
		
		/*if (ig.input.pressed('click') && this.puzzleOn == false){
			this.puzzleOn = true//!this.puzzleOn;
			//if (this.puzzleOn == true)
			//{
				ig.game.spawnEntity(EntityPuzzleBox, 448, gameviewport.y );
				ig.game.spawnEntity(EntityMenuClose, gameviewport.x + 200, gameviewport.y);
			//}
		}*/
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
		/*if (ig.input.pressed('click'))
		{
			ig.log("X is: " + ig.input.mouse.x);
			ig.log("Y is: " + ig.input.mouse.y);
		}*/
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		if (this.puzzleOn == true)
		{
			//this.windowBox.draw(96,64);
			ig.log(this.windowBox.width);
		}
	}
});



// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 576, 384, 1 );

});
