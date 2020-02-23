ig.module(
    'game.entities.puzzleBox'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityPuzzleBox = ig.Entity.extend({
        //Animation Sheet
        animSheet: new ig.AnimationSheet('media/BasicBackground.png',448,320),
        //Layer that the object is draw on
        zIndex: 4,
        //Initial position
        pos: {x: 32, y: 32},

        //Constructor
        init:function(){
            //Define the animation
            this.addAnim( 'idle', 1, [0]);

            //Set the current puzzle for the game to this puzzle
            ig.game.currentPuzzle = this;
        },

        //Draw the object. Done Every frame
        draw: function(){
            this.parent();

            //Get the offset from the screen position
            var offsetX = ig.game.screen.x;
            var offsetY = ig.game.screen.y;

            //Set the posision of the object based off of the screen offset
            this.pos.x = offsetX + 64;
            this.pos.y = offsetY + 32;
        }
    })
})