ig.module(
    'game.entities.credits'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    //Class definition
    EntityCredits = ig.Entity.extend({
        //Layer that the object is drawn on
        zIndex: 1,
        //Animation Sheet
        animSheet: new ig.AnimationSheet('media/GenericButton.png', 256, 32),
        //Size of the hit box
        size: {x: 256, y: 32},
        //Initial Position
        pos: {x: 160, y: 256},

        //Constructor
        init:function(){
            //Defining the animations
            this.addAnim('idle', 1, [0]);
            this.addAnim('highlight', 1, [1]);

            //Setting the animation to idle
            this.currentAnim = this.anims.idle

        },

        //Drawing the object every frame
        draw: function(){
            

            this.parent();

            //Create a font object
            var font = new ig.Font( 'media/04b03.font.png' );
            //draw the font
            font.draw("Credits", this.pos.x + 128, this.pos.y + 16, ig.Font.ALIGN.CENTER);
        },

        //Called Every frame
        update: function(){

            //Find the mouse position
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            
            //If you click while the credits UI is showing. Then turn the UI off
            if(ig.input.pressed('click') && ig.game.displayCredits == true){
                ig.game.displayCredits = false;
                ig.log("Kill credits");
            }
            //If your mouse is within the bounds of the credits button
            else if(x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y
            && y <= this.pos.y + this.size.y) {
                this.currentAnim = this.anims.highlight;
                //If you click on the Credits button and the UI is not showing. Then display the UI.
                if(ig.input.pressed('click') && ig.game.displayCredits == false){
                    ig.game.displayCredits = true;
                    ig.log("diplay Credits")
                }
            }
            //Otherwise set the animation to idle
            else{
                this.currentAnim = this.anims.idle;
            }
        }
    })
})