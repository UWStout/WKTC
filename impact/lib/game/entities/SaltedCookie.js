ig.module(
    'game.entities.SaltedCookie'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox'
)
.defines(function(){

    EntitySaltedCookie = ig.Entity.extend({
        size: {x: 32, y:32},
        name: "High",
        animSheet: new ig.AnimationSheet('media /fullSaltedcarmel.png',32,32),
        type: ig.Entity.TYPE.B,
        target: {},
        text: '',
        collides: ig.Entity.COLLIDES.FIXED,

        zIndex: 0,
        // Setting up all the animations
        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',.5,[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
            this.addAnim('highlight', .5, [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);

            this.currentAnim = this.anims.idle;
        },

        update: function(){
            // Target the player, and constantly check if they are within 50 pixels away
            for(var t in this.target){
                var ent = ig.game.getEntityByName(this.target[t])
                // If they are within said distance, give Salted Cookie a highlight around themselves
                if(ent && ent instanceof EntityPlayer){
                    var dist = this.distanceTo(ent);
                    if(dist < 50) {
                        if(this.currentAnim == this.anims.idle){
                            this.currentAnim = this.anims.highlight;
                        }
                    }
                    // Otherwise, unhighlight them
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