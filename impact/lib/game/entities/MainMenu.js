ig.module(
    'game.entities.MainMenu'
)
.requires(
    'impact.entity',
    'game.entities.StartButton',
    'game.entities.HowToPlay',
    'game.entities.credits'
)
.defines(function() {
   
    EntityMainMenu = ig.Entity.extend({
        //Layer that the object is drawn on
        zIndex: 0,
        //Image of the background of the start and end screen
        background: new ig.Image('media/Background.png'),
        //Define the size of the array
        size: {x: 576, y: 384},

        //Draw the object. Called Every Frame
        draw: function(){
            this.parent();
            //Draw the image
            this.background.draw(0,0);
        }
    })
})