ig.module(
    'game.entities.matchingCard'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    //Class Definition
    EntityMatchingCard = ig.Entity.extend({
        //Animation Sheet
        animSheet: new ig.AnimationSheet('media/TestCards.png',64,64),
        //Determines the layer is drawn on
        zIndex: 5,
        //Number the card is assigned
        matchNumber: 0,
        //Defines a offset in the x direction, so the cards are evenly spaced
        coordX: 0,
        //Defines a offset in the y direction, so the cards are evenly spaced
        coordY: 0,
        //Define the size of the hit box
        size: {x: 64, y: 64},
        //Intial position of the card. Gets changed when the card spawns
        pos: {x: 32, y: 32},

        //Function that changes the image of card based off the matchNumber
        changeFrame: function(){
            switch(this.matchNumber){
                case 0:
                    this.currentAnim = this.anims.square1
                    break;
                case 1:
                    this.currentAnim = this.anims.square2
                    break;
                case 2:
                    this.currentAnim = this.anims.circle1
                    break;
                case 3:
                    this.currentAnim = this.anims.circle2
                    break;
                case 4:
                    this.currentAnim = this.anims.star1
                    break;
                case 5:
                    this.currentAnim = this.anims.star2
                    break;
            }
        },
        //Functions used to initialize the values of the card
        init:function(){
            //Creating the animations using the animation sheet
            this.addAnim( 'idle', 1, [6]);
            this.addAnim( 'square1', 1, [0]);
            this.addAnim( 'square2', 1, [1]);
            this.addAnim( 'circle1', 1, [2]);
            this.addAnim( 'circle2', 1, [3]);
            this.addAnim( 'star1', 1, [4]);
            this.addAnim( 'star2', 1, [5]);

            //Set the current animation to idle
            this.currentAnim = this.anims.idle
        },

        //Function that is run every frame. 
        //Used to draw the card in the right position when it is spawned
        draw: function(){
            this.parent();
            var offsetX = ig.game.screen.x;
            var offsetY = ig.game.screen.y;
            this.pos.x = offsetX + 128 + this.coordX * 96;
            this.pos.y = offsetY + 40 + this.coordY * 80;
        },

        //Tick Function that is run every frame
        update: function(){

            //Get the position of the mouse
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);

            //Event called when the mouse is click and the position overlaps with the card
            if(ig.input.pressed('click') && x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y && y <= this.pos.y + this.size.y && this.currentAnim == this.anims.idle){

                //Check to see if another card has been clicked
                if(ig.game.card1 == null){
                    ig.game.card1 = this
                    this.changeFrame();
                }
                //Otherwise we set to the second card
                else if(ig.game.card2 == null){
                    ig.game.card2 = this
                    this.changeFrame();
                }
            }
        }
    })
})