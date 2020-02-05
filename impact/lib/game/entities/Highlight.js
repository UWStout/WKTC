ig.module(
    'game.entities.Highlight'
)
.requires(
    'impact.entity',
    'game.entities.player'
)
.defines(function(){

    EntityHighlight = ig.Entity.extend({
        size: {x: 32, y:32},
        name: "High",
        animSheet: new ig.AnimationSheet('media /Highlight.png',32,32),
        type: ig.Entity.TYPE.B,
        target: {},

        zIndex: 0,


        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
            this.addAnim('highlight', 1, [1]);

            this.currentAnim = this.anims.idle;
        },

        update: function(){

            for(var t in this.target){
                var ent = ig.game.getEntityByName(this.target[t])
                if(ent && ent instanceof EntityPlayer){
                    var dist = this.distanceTo(ent);
                    if(dist < 50) {
                        if(this.currentAnim == this.anims.idle){
                            this.currentAnim = this.anims.highlight;
                        }
                    }
                    else{
                        if(this.currentAnim == this.anims.highlight){
                            this.currentAnim = this.anims.idle;
                        }
                    
                    }
                }
            }

            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight){
                ig.log("Display Text");
                this.kill();
            }
        

            this.parent();
        },
    })

});