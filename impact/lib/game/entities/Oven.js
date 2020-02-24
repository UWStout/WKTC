ig.module(
    'game.entities.Oven'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox'
)
.defines(function(){

    EntityOven = ig.Entity.extend({
        //Size of the hit box/object
        size: {x: 135, y:260},
        //Animation sheet
        animSheet: new ig.AnimationSheet('media /Oven.png',135,260),
        //List of objects that this object can interact with
        target: {},
        //Defining the collision protocol
        collides: ig.Entity.COLLIDES.FIXED,
        //Create a timer
        textTimer: new ig.Timer(),
        //Layer that the object is drawn on.
        zIndex: 2,

        //Constructor
        init: function(x, y , settings){
            this.parent(x,y,settings);

            //Defining the animations
            this.addAnim('idle',1,[1]);
            this.addAnim('highlight', 1, [0]);

            //Change the current animation to idle
            this.currentAnim = this.anims.idle;

            //Set the time and pause for later use
            this.textTimer.set(2);
		    this.textTimer.pause();
        },

        //Called Every Frame
        update: function(){

            //Get a reference to the screen
            var gameviewport = ig.game.screen;

            //For each targer
            for(var t in this.target){
                //Get its type
                var ent = ig.game.getEntityByName(this.target[t])
                //If the target is type Player
                if(ent && ent instanceof EntityPlayer){
                    //get the distance between the player and the object
                    var dist = this.distanceTo(ent);
                    //If the distance is less than 150 and the puzzle is not solved
                    if(dist < 150 && ig.game.dialSolved == false) {
                        if(this.currentAnim == this.anims.idle){
                            this.currentAnim = this.anims.highlight;
                        }
                    }
                    //Otherwise set the animation to Idle
                    else{
                        if(this.currentAnim == this.anims.highlight){
                            this.currentAnim = this.anims.idle;
                        }
                    
                    }
                }
            }


            //If the player presses E and the object is highlighted.
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false && ig.game.dialPuzzle == false && ig.game.dialSolved == false){

                
                //Spawn the UI
                ig.game.dialPuzzle = true;
                ig.game.spawnEntity(EntityPuzzleBox, 448, gameviewport.y );
                ig.game.spawnEntity(EntityMenuClose, gameviewport.x + 200, gameviewport.y);
                
                //Spawn the puzzle and set the value
                var temp = ig.game.spawnEntity(EntityDialPuzzle, 448, gameviewport.y);
                temp.ovenChoice = ig.game.oChoice;

                //Freeze player movement
                ig.game.frozen = true;


                

            }  

            this.parent();
        },

        draw: function(){

            this.parent()

            //If the puzzle is solved
            if(ig.game.dialSolved){
                //if the timer is not done. Then start the timer
                if(this.textTimer.delta() < 2){
                    //Start the timer
                    this.textTimer.unpause();
                }

                //Create a font object
                var font = new ig.Font( 'media/04b03.font.png' );

                //If the timer is not done
                if(this.textTimer.delta() <= 2) {
                    //Based off of the win number in the game file
                    switch(ig.game.susWinNum) {
                        case 0:
                            font.draw("Evidence Obtained: You have found Traces of Frosting on the ground", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 1:
                            font.draw("Evidence Obtained: You have found Traces of Salt on the ground", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 2:
                            font.draw("Evidence Obtained: You have found Traces of Coffee on the ground", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 3:
                            font.draw("Evidence Obtained: You have found Traces of Red Velvet on the ground", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                    }
                }
                //If the timer is done
                else{
                    this.textTimer.pause();
                }
            }
        }
    })
});