ig.module(
    'game.entities.testTrigger'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityTestTrigger = ig.Entity.extend({
        // Set up Collision properties
        size: {x:32,y:32},
        collides: ig.Entity.COLLIDES.NONE,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        animSheet: new ig.AnimationSheet('media /Highlight.png',32,32),

        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
        },

        check: function(other){
            if(other.name == "Player"){
                this.kill();
            }
            
        }


    });
});