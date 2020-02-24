ig.module(
    'game.entities.RedVelvet'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox'
)
.defines(function(){

    EntityRedVelvet = ig.Entity.extend({
        size: {x: 32, y:32},
        name: "High",
        animSheet: new ig.AnimationSheet('media /Red_Velvet.png',32,32),
        type: ig.Entity.TYPE.B,
        target: {},
        text: '',
        collides: ig.Entity.COLLIDES.FIXED,

        zIndex: 0,
        // Set up animations
        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',.5,[0, 2]);
            this.addAnim('highlight', .5, [1, 3]);

            this.currentAnim = this.anims.idle;
        },

        update: function(){
            // Target the player
            for(var t in this.target){
                var ent = ig.game.getEntityByName(this.target[t])
                if(ent && ent instanceof EntityPlayer){
                    // If the player gets within 50 units, give Red Velvet a highlight
                    var dist = this.distanceTo(ent);
                    if(dist < 50) {
                        if(this.currentAnim == this.anims.idle){
                            this.currentAnim = this.anims.highlight;
                        }
                    }
                    // Otherwise, un-highlight them
                    else{
                        if(this.currentAnim == this.anims.highlight){
                            this.currentAnim = this.anims.idle;
                        }
                    
                    }
                }
            }


             // If the player is close enough and presses the interact button, pause the game and play their text
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false){

                for(var t in this.target){
                    if(ent && ent instanceof EntityPlayer){
                        ig.game.frozen = true;
                        ig.log(ig.game.frozen);
                    }
                }
                // Spawn a textbox to place/display their text
                var textBox = ig.game.spawnEntity(EntityTextBox, 32, ig.system.height - 32);
                textBox.setText(this.text);

            }
            
            
        

            this.parent();
        },
    })

});