ig.module(
    'game.entities.matchingBox'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityMatchingBox = ig.Entity.extend({
        //Animation Sheet
        animSheet: new ig.AnimationSheet('media/BasicBackground.png',448,320),
        //Layer the object is drawn on
        zIndex: 4,
        //Initial Position
        pos: {x: 32, y: 32},

        //Constructor
        init:function(){
            //Define the animation
            this.addAnim( 'idle', 1, [0]);

            //Tell the game that this is the current puzzle
            ig.game.currentPuzzle = this;
        },

        //Draw the Object. Called Every Frame
        draw: function(){
            this.parent();

            //Get the screen offset
            var offsetX = ig.game.screen.x;
            var offsetY = ig.game.screen.y;

            //Set the positios of the object based of the offset
            this.pos.x = offsetX + 64;
            this.pos.y = offsetY + 32;
        }
    })
})