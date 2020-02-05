ig.module(
	'game.entities.trigger'
)
.requires(
    'impact.entity',
    'game.entities.player'
)
.defines(function(){

EntityTrigger = ig.Entity.extend({

    _wmScalable: true,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(0,255,0,0.2)',

    checkAgainst: ig.Entity.TYPE.BOTH,
    collides: ig.Entity.COLLIDES.NONE,

    target: {},


    update: function() {},

    check: function( other ) {
        if(other instanceof EntityPlayer){
            ig.log("It worked");
        }
    }
})

});