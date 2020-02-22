ig.module(
    'game.entities.MatchingObject'
)
.requires(
    'impact.entity',
    'game.entities.player',
    'game.entities.textBox'
)
.defines(function(){

    EntityMatchingObject = ig.Entity.extend({
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
                    if(dist < 50 && ig.game.matchingSolved == false) {
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


            
            if(ig.input.pressed('action') && this.currentAnim == this.anims.highlight && ig.game.frozen == false && ig.game.matchingOn == false && ig.game.matchingSolved == false){

                ig.game.matchingOn = true;
                ig.game.frozen = true;

                ig.game.spawnEntity(EntityMatchingBox, 448, gameviewport.y);
                for(var i = 0; i < 12; i++){
                    var card = ig.game.spawnEntity(EntityMatchingCard)
                    card.coordX = i % 3;
                    card.coordY = Math.trunc(i/3);
                    card.matchNumber = ig.game.matchingArray[i]
                }
                ig.game.spawnEntity(EntityMenuClose, gameviewport.x + 200, gameviewport.y);

            }

            if(ig.game.card1 != null && ig.game.card2 != null) {
                ig.game.cardTimer.unpause();
                if(ig.game.cardTimer.delta() >= 0.25) {
                    if(ig.game.card1.matchNumber == ig.game.card2.matchNumber){
                        ig.game.card1.kill();
                        ig.game.card2.kill();
                        ig.game.card1 = null;
                        ig.game.card2 = null;
                        ig.game.matches++;
                    }
                    else{
                        ig.game.card1.currentAnim = ig.game.card1.anims.idle;
                        ig.game.card2.currentAnim = ig.game.card2.anims.idle;
    
                        ig.game.card1 = null;
                        ig.game.card2 = null;
                    }
                    ig.game.cardTimer.reset();
                    ig.game.cardTimer.pause();
                }
            }
    
            if(ig.game.matches == 6){
                //Still need to add the evidence connection
                ig.game.currentPuzzle.kill();
                ig.game.matches = 0;
                ig.game.puzzleOn = false;
                ig.game.matchingOn = false;
                ig.game.closeWindow = true;
                ig.game.matchingSolved = true;
                ig.game.frozen = false;
            }
            
            
        

            this.parent();
        },

        draw: function(){

            this.parent()

            if(ig.game.matchingSolved){
                if(this.textTimer.delta() < 2){
                    this.textTimer.unpause();
                    ig.log("Unpaused");
                }

                var font = new ig.Font( 'media/04b03.font.png' );

                if(this.textTimer.delta() <= 2) {
                    switch(ig.game.wepWinNum) {
                        case 0:
                            font.draw("Evidence Obtained: The Murder weapon was a glass of milk", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 1:
                            font.draw("Evidence Obtained: The Murder weapon was a licorice rope", 288, 128, ig.Font.ALIGN.CENTER)
                            break;
                        case 2:
                            font.draw("Evidence Obtained: The Murder weapon was a Dino Grabber", 288, 128, ig.Font.ALIGN.CENTER)
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