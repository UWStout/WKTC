// Entity for the title screen
ig.module(
    'game.entities.Title'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityTitle = ig.Entity.extend({
        // Set up Collision properties
        size: {x:448,y:64},
        pos: {x: 160, y: 96},
        animSheet: new ig.AnimationSheet('media /Title.png',448,64),

        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
        },


    });
});