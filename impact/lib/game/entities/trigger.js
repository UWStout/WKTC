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
    name: "Trig",
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.NONE,
    
    target: {},

    update: function() {
        
    },

    check: function( other ) {
        for (var t in this.target)
        {
            var ent = ig.game.getEntityByName (this.target[t]);
            if (ent && ent instanceof EntityPlayer)
            {
                ig.log("Display Test");
            }
        }
    }
})

});