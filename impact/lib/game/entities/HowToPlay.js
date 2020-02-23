ig.module(
    'game.entities.HowToPlay'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityHowToPlay = ig.Entity.extend({
        //Layer that the object is drawn on
        zIndex: 1,
        //Animation Sheet
        animSheet: new ig.AnimationSheet('media/GenericButton.png', 256, 32),
        //Define the size of the hit box
        size: {x: 256, y: 32},
        //Initial position
        pos: {x: 160, y: 192},

        //Constructor
        init:function(){

            //Defining the animations
            this.addAnim('idle', 1, [0]);
            this.addAnim('highlight', 1, [1]);

            //Set the current animation to idle
            this.currentAnim = this.anims.idle

        },

        //Draw the object. Called Every fram
        draw: function(){
            this.parent();

            //Create a font object
            var font = new ig.Font( 'media/04b03.font.png' );
            font.draw("How To Play", this.pos.x + 128, this.pos.y + 16, ig.Font.ALIGN.CENTER);
        },

        //Called Every Frame
        update: function(){

            //Get the mouse position
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            
            //If the player click and the HowUI is displaying. Then stop displaying the UI
            if(ig.input.pressed('click') && ig.game.displayHowTo == true){
                ig.game.displayHowTo = false;
                ig.log("Kill credits");
            }
            //If the mouse is within the HowTo button bounds
            else if(x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y
            && y <= this.pos.y + this.size.y) {
                this.currentAnim = this.anims.highlight;

                //It the mouse is clicked and the UI is not displaying. Then display the UI
                if(ig.input.pressed('click') && ig.game.displayHowTo == false){
                    ig.game.displayHowTo = true;
                }
            }
            //Otherwise set the animation to idle
            else{
                this.currentAnim = this.anims.idle;
            }
        }
    })
})