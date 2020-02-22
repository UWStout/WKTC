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

    animSheet: new ig.AnimationSheet( 'media/Trex_Walking.png', 32, 32),

    name: "Player",

    zIndex: 2,
    

    init: function( x, y, settings){
        this.parent( x, y, settings);
        ig.Entity.TYPE.A;
        this.addAnim( 'idle', 1, [0]);
        this.addAnim( 'right', .2, [0, 1, 4, 5]);
        this.addAnim( 'left', .2, [2, 3, 6, 7]);

        this.currentAnim = this.anims.idle
    },

    ready: function(){
        ig.game.spawnEntity(EntityWepEvidence, 0,0);
        ig.game.spawnEntity(EntitySusEvidence, 0,0);
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
            this.currentAnim = this.anims.left;
        }
        else if(ig.input.state('right') && ig.game.frozen == false){
            this.vel.x = 100;
            this.currentAnim = this.anims.right;
        }
        else{
            this.vel.x = 0;
        }

        if(this.vel.x == 0 && this.vel.y == 0){
            this.currentAnim = this.anims.idle;
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