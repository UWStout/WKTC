ig.module(
	'game.entities.player'
)
.requires(
    'impact.entity',
    'impact.debug.debug'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
    //Define the size of the hit box
    size: {x: 32, y:48},
    //Define the collision protocol
    collides: ig.Entity.COLLIDES.PASSIVE,
    //Animation Sheet
    animSheet: new ig.AnimationSheet( 'media/Trex_Walking.png', 32, 32),
    //Name give to the play to other object can target it. Defined in the level editor
    name: "Player",
    //Layer that the object is drawn on
    zIndex: 2,
    
    //Constructor
    init: function( x, y, settings){
        this.parent( x, y, settings);

        //Define the animations
        this.addAnim( 'idle', 1, [0]);
        this.addAnim( 'right', .2, [0, 1, 4, 5]);
        this.addAnim( 'left', .2, [2, 3, 6, 7]);

        //Set the current animations to the idle animation
        this.currentAnim = this.anims.idle
    },

    //Called when the object is fully loaded in
    ready: function(){
        //Spawn the evidence UI
        ig.game.spawnEntity(EntityWepEvidence, 0,0);
        ig.game.spawnEntity(EntitySusEvidence, 0,0);

		ig.game.screen.x = this.pos.x - gamecanvas.width / 2;
		ig.game.screen.y = this.pos.y - gamecanvas.height / 2;
    },

    //Called Every Frame
    update: function(){

        this.parent();

        //Check for input and move the character up and down
        if(ig.input.state('up')  && ig.game.frozen == false){
            this.vel.y = -100;
        }
        else if(ig.input.state('down') && ig.game.frozen == false){
            this.vel.y = 100;
        }
        else{
            this.vel.y = 0;
        }

        //Check for input and move the character left and right
        if(ig.input.state('left') && ig.game.frozen == false){
            this.vel.x = -100;
            this.currentAnim = this.anims.left;
        }
        else if(ig.input.state('right') && ig.game.frozen == false){
            this.vel.x = 100;
            this.currentAnim = this.anims.right;
        }
        else{
            this.vel.x = 0;
        }

        //Otherwise go into the idle animation
        if(this.vel.x == 0 && this.vel.y == 0){
            this.currentAnim = this.anims.idle;
        }
    },
})

});