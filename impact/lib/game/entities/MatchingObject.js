ig.module(
    'game.entities.MatchingObject'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox'
)
.defines(function(){

    EntityMatchingObject = ig.Entity.extend({
        //Ths size of the hit box
        size: {x: 53, y:82},
        //Animation Sheet
        animSheet: new ig.AnimationSheet('media /Compute_Spritesheet.png',53,82),
        //List of other object that can interacte with this one.  Defined in the level editor.
        target: {},
        //Define the collision protocol
        collides: ig.Entity.COLLIDES.FIXED,
        //Create a timer for text to display
        textTimer: new ig.Timer(),
        //The layer that the object is drawn on
        zIndex: 2,

        //Constructor
        init: function(x, y , settings){
            this.parent(x,y,settings);

            //Define the animations
            this.addAnim('idle',1,[1]);
            this.addAnim('highlight', 1, [0]);

            //Change the current animation to idle
            this.currentAnim = this.anims.idle;

            //Set the timer and pause the timer
            this.textTimer.set(2);
		    this.textTimer.pause();
        },

        //Called Every Frame
        update: function() {

            //get the screen
            var gameviewport = ig.game.screen;

            //For every target in the array
            for(var t in this.target){
                //Get the target's type
                var ent = ig.game.getEntityByName(this.target[t])
                //If the target is the Player
                if(ent && ent instanceof EntityPlayer) {
                    //Get the distance between the object and the player
                    var dist = this.distanceTo(ent);
                    //If the distance is less than 75 and the puzzle has not been solved
                    if(dist < 75 && ig.game.matchingSolved == false) {
                        if(this.currentAnim == this.anims.idle){
                            this.currentAnim = this.anims.highlight;
                        }
                    }
                    //Otherwise set the animation to idle
                    else{
                        if(this.currentAnim == this.anims.highlight){
                            this.currentAnim = this.anims.idle;
                        }
                    
                    }
                }
            }


            //If the player pressed E when the object is highlighted
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false && ig.game.matchingOn == false && ig.game.matchingSolved == false){

                //Turn the puzzle on
                ig.game.matchingOn = true;
                //Freeze player movement
                ig.game.frozen = true;

                //Spawn the Matching Puzzle
                ig.game.spawnEntity(EntityMatchingBox, 448, gameviewport.y);
                //Spawn the 12 cards that go with the puzzle
                for(var i = 0; i < 12; i++){
                    var card = ig.game.spawnEntity(EntityMatchingCard)
                    card.coordX = i % 3;
                    card.coordY = Math.trunc(i/3);
                    card.matchNumber = ig.game.matchingArray[i]
                }
                //Spawn the close button
                ig.game.spawnEntity(EntityMenuClose, gameviewport.x + 200, gameviewport.y);

            }

            //Both of the cards are not NULL
            if(ig.game.card1 != null && ig.game.card2 != null) {
                //Start the timer
                ig.game.cardTimer.unpause();

                //If the timer is done
                if(ig.game.cardTimer.delta() >= 0.25) {
                    //If the cards match
                    if(ig.game.card1.matchNumber == ig.game.card2.matchNumber){
                        //Destroy the cards
                        ig.game.card1.kill();
                        ig.game.card2.kill();
                        //Set the varibles to null for picking new cards left on the board
                        ig.game.card1 = null;
                        ig.game.card2 = null;

                        //Increase the number of matches found
                        ig.game.matches++;
                    }
                    //If the cards don't match. Then Turn them back over
                    else{
                        ig.game.card1.currentAnim = ig.game.card1.anims.idle;
                        ig.game.card2.currentAnim = ig.game.card2.anims.idle;
    
                        ig.game.card1 = null;
                        ig.game.card2 = null;
                    }

                    //Reset the time and pause
                    ig.game.cardTimer.reset();
                    ig.game.cardTimer.pause();
                }
            }
    
            //If the maximum amount of matches has been found
            if(ig.game.matches == 6){
                //Close the puzzle
                ig.game.currentPuzzle.kill();
                //Set to 0 so the update loop is not called multiple times
                ig.game.matches = 0;
                //Turn the puzzle off
                ig.game.puzzleOn = false;
                //Turn the matching off
                ig.game.matchingOn = false;
                //Close the window
                ig.game.closeWindow = true;
                //Solved = True
                ig.game.matchingSolved = true;
                //Unfreeze the player
                ig.game.frozen = false;
            }
            
            
        

            this.parent();
        },

        //Draw the object. Called the frame
        draw: function(){

            this.parent()

            //If the puzzle has been solved
            if(ig.game.matchingSolved){
                //Unpause the text display timer
                if(this.textTimer.delta() < 2){
                    this.textTimer.unpause();
                }

                //Create a font object
                var font = new ig.Font( 'media/04b03.font.png' );

                //If the timer is not finished. Display the text
                if(this.textTimer.delta() <= 2) {
                    //Based of the winning number for the game. Draw Text that is relavent to that Item
                    switch(ig.game.wepWinNum) {
                        case 0:
                            font.draw("Evidence Obtained: The Murder weapon was a glass of milk", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 1:
                            font.draw("Evidence Obtained: The Murder weapon was a licorice rope", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 2:
                            font.draw("Evidence Obtained: The Murder weapon was a Dino Grabber", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                    }
                }
                //Once the timer is up pause it
                else{
                    this.textTimer.pause();
                }

            }

            

        }
    })

});