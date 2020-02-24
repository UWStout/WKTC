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
        // Setting animations
        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',.5,[0, 1, 2, 3, 4, 5, 6, 7]);
            this.addAnim('highlight', .5, [9, 10, 11, 12, 13, 14, 15, 16]);

            this.currentAnim = this.anims.idle;
        },

        update: function(){
            // Target the player, and constantly check if they are within 50 pixels away
            for(var t in this.target){
                var ent = ig.game.getEntityByName(this.target[t])
                // If they are within said distance, give Sugar Cookie a highlight around themselves
                if(ent && ent instanceof EntityPlayer){
                    var dist = this.distanceTo(ent);
                    if(dist < 50) {
                        if(this.currentAnim == this.anims.idle){
                            this.currentAnim = this.anims.highlight;
                        }
                    }
                    // Otherwise, un-highlight them.
                    else{
                        if(this.currentAnim == this.anims.highlight){
                            this.currentAnim = this.anims.idle;
                        }
                    
                    }
                }
            }


            // If you interact with the Sugar Cookie Suspect while in range
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false){

                for(var t in this.target){
                    if(ent && ent instanceof EntityPlayer){
                        // Pause the game so the player cannot move
                        ig.game.frozen = true;
                        ig.log(ig.game.frozen);
                    }
                }
                // Spawn a text box and set its box to the text within this class
                var textBox = ig.game.spawnEntity(EntityTextBox, 32, ig.system.height - 32);
                textBox.setText(this.text);

            }
            
            
        

            this.parent();
        },
    })

});