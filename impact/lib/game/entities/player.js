ig.module(
	'game.entities.player'
)
.requires(
    'impact.entity',
    'impact.debug.debug'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
    size: {x: 32, y:48},
    collides: ig.Entity.COLLIDES.PASSIVE,
    checkAgainst: ig.Entity.TYPE.B,

    animSheet: new ig.AnimationSheet( 'media/PlayerTestSpriteSheet.png', 32, 48),

    name: "Player",

    zIndex: 2,
    

    init: function( x, y, settings){
        this.parent( x, y, settings);
        ig.Entity.TYPE.A;
        this.addAnim( 'idle', 1, [0])
    },

    update: function(){

        this.parent();

        if(ig.input.state('up')  && ig.game.frozen == false){
            this.vel.y = -100;
        }
        else if(ig.input.state('down') && ig.game.frozen == false){
            this.vel.y = 100;
        }
        else{
            this.vel.y = 0;
        }

        if(ig.input.state('left') && ig.game.frozen == false){
            this.vel.x = -100;
        }
        else if(ig.input.state('right') && ig.game.frozen == false){
            this.vel.x = 100;
        }
        else{
            this.vel.x = 0;
        }
    },

    check: function(other) {
        if (other.name == "Trig")
        {        
            ig.log("Kill me");
        }
        if (other.name == "High")
        {
            ig.log("Show Me the Light");
        }
    }

})

});