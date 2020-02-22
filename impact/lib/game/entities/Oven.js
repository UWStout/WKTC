ig.module(
    'game.entities.Oven'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox'
)
.defines(function(){

    EntityOven = ig.Entity.extend({
        size: {x: 32, y:32},
        name: "High",
        animSheet: new ig.AnimationSheet('media /Highlight.png',32,32),
        type: ig.Entity.TYPE.B,
        target: {},
        collides: ig.Entity.COLLIDES.FIXED,
        textTimer: new ig.Timer(),

        zIndex: 2,

        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
            this.addAnim('highlight', 1, [1]);

            this.currentAnim = this.anims.idle;

            this.textTimer.set(2);
		    this.textTimer.pause();
        },

        update: function(){

            var gameviewport = ig.game.screen;
		    var gamecanvas = ig.system;

            for(var t in this.target){
                var ent = ig.game.getEntityByName(this.target[t])
                if(ent && ent instanceof EntityPlayer){
                    var dist = this.distanceTo(ent);
                    if(dist < 50 && ig.game.dialSolved == false) {
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


            
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false && ig.game.dialPuzzle == false && ig.game.dialSolved == false){

                ig.game.dialPuzzle = true;
                ig.game.spawnEntity(EntityPuzzleBox, 448, gameviewport.y );
                ig.game.spawnEntity(EntityMenuClose, gameviewport.x + 200, gameviewport.y);
                
                var temp = ig.game.spawnEntity(EntityDialPuzzle, 448, gameviewport.y);
                temp.ovenChoice = ig.game.oChoice;

            }  

            this.parent();
        },

        draw: function(){

            this.parent()

            if(ig.game.dialSolved){
                if(this.textTimer.delta() < 2){
                    this.textTimer.unpause();
                    ig.log("Unpaused");
                }

                var font = new ig.Font( 'media/04b03.font.png' );

                if(this.textTimer.delta() <= 2) {
                    switch(ig.game.susWinNum){
                        case 0:
                            font.draw("Evidence Obtained: You have found Traces of Frosting on the ground", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 1:
                            font.draw("Evidence Obtained: You have found Traces of Salt on the ground", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 2:
                            font.draw("Evidence Obtained: You have found Traces of Coffee on the ground", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 3:
                            font.draw("Evidence Obtained: You have found Traces of Red Velvet on the ground", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                    }
                }
                else{
                    this.textTimer.pause();
                }



            }

            

        }
    })

});