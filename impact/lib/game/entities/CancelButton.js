ig.module(
    'game.entities.CancelButton'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    //Class Definition
    EntityCancelButton = ig.Entity.extend({
        //Layer the object is drawn on
        zIndex: 5,
        //Animation Sheet
        animSheet: new ig.AnimationSheet('media/MoreButtons.png', 128, 64),
        //Defining the hitbox
        size: {x: 128, y: 64},
        //Initial position
        pos: {x: 320, y: 224},
        //Bool used to tell when the button has been pressed
        cancel: false,
        init:function(){
            //Defining the animations
            this.addAnim('idle', 1, [2]);
            this.addAnim('highlight', 1, [3]);

            //Set the animation to the idle Animation
            this.currentAnim = this.anims.idle

        },
        draw: function(){
            this.parent();

            //Create a font object
            var font = new ig.Font( 'media/04b03.font.png' );
            //Draw the font to the screen
            font.draw("Cancel", this.pos.x + 64, this.pos.y + 32, ig.Font.ALIGN.CENTER);

            
        },
        update: function(){

            //Get the locations of the mouse
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            
            //If the object is within the bounds of the object. Then set the anim to highlight
            if(x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y
            && y <= this.pos.y + this.size.y) {
                this.currentAnim = this.anims.highlight;

                //If highlighted and the mouse is clicked
                if(ig.input.pressed('click')){
                    this.cancel = true;
                    ig.game.frozen = false;
                }
            }
            //Otherwise set the animation to idle
            else{
                this.currentAnim = this.anims.idle;
            }
        }
    })
})