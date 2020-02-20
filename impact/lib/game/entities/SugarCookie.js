ig.module(
    'game.entities.SugarCookie'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox'
)
.defines(function(){

    EntitySugarCookie = ig.Entity.extend({
        size: {x: 32, y:32},
        name: "High",
        animSheet: new ig.AnimationSheet('media /fullSugacookie.png',32,32),
        type: ig.Entity.TYPE.B,
        target: {},
        text: '',
        collides: ig.Entity.COLLIDES.FIXED,

        zIndex: 0,

        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',.5,[0, 1, 2, 3, 4, 5, 6, 7]);
            this.addAnim('highlight', .5, [9, 10, 11, 12, 13, 14, 15, 16]);

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


            
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false){

                for(var t in this.target){
                    if(ent && ent instanceof EntityPlayer){
                        ig.game.frozen = true;
                        ig.log(ig.game.frozen);
                    }
                }
            
                var textBox = ig.game.spawnEntity(EntityTextBox, 32, ig.system.height - 32);
                textBox.setText(this.text);

            }
            
            
        

            this.parent();
        },
    })

});