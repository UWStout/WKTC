ig.module(
    'game.entities.EndObject'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityEndObject = ig.Entity.extend({
        //Set the size of the hit box
        size: {x:128,y:64},
        //Set the initial position
        pos: {x: 288, y:192},
        //Animation sheet
        animSheet: new ig.AnimationSheet('media /TryAgainButton.png',128,64),

        //Constructor
        init: function(x, y , settings) {
            this.parent(x,y,settings);

            //Set up the animations
            this.addAnim('idle',1,[0]);
            this.addAnim('highlight', 1, [1]);

            //Set the starting animation to the idle animation
            this.currentAnim = this.anims.idle;
        },

        //Called every frame
        update: function(){
            //Get the mouse positions
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            
            //If the mouse is withing the bounds of the object
            if(x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y
            && y <= this.pos.y + this.size.y) {
                //Change the animation
                this.currentAnim = this.anims.highlight;

                //If you click while in the bounds. Then reset the game
                if(ig.input.pressed('click')){

                    //Change at the starting values to their default
                    ig.game.reset();

                    //Load the main menu
                    ig.game.loadLevel(LevelMainMenu);
                    this.kill();
                }
            }
            //Otherwise set the animation to idle
            else{
                this.currentAnim = this.anims.idle;
            }  
        },

        //Used to draw the object. Called Every Frame
        draw: function() {

            //Create a Font object for the button
            var font = new ig.Font( 'media/04b03.font.png' );
            //Create a Font object for the win message
            var youWin = new ig.Font( 'media/04b03.font.png');

            this.parent();

            //Text on the button
            font.draw("Try Again?", this.pos.x + 64, this.pos.y + 32, ig.Font.ALIGN.CENTER);

            //If the winning values match the one the player gave. Then the player wins
            if(ig.game.endSusNum == ig.game.susWinNum && ig.game.endWepNum == ig.game.wepWinNum){
                youWin.draw("You Win!! Nice Job Detective!", this.pos.x + 64, this.pos.y - 32, ig.Font.ALIGN.CENTER);
            }
            //Otherwise the player loses
            else{
                youWin.draw("The Killer got away. Better Luck Next Time", this.pos.x + 64, this.pos.y - 32, ig.Font.ALIGN.CENTER);
            }
        },


    });
});