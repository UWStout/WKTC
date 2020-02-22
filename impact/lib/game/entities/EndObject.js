ig.module(
    'game.entities.EndObject'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityEndObject = ig.Entity.extend({
        // Set up Collision properties
        size: {x:128,y:64},
        pos: {x: 288, y:192},
        animSheet: new ig.AnimationSheet('media /TryAgainButton.png',128,64),

        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
            this.addAnim('highlight', 1, [1]);

            this.currentAnim = this.anims.idle;

            this.pos.x = 224;
            this.pos.y = 192;

            ig.log(ig.game.endSusNum);
            ig.log(ig.game.susWinNum);
            ig.log(ig.game.endWepNum);
            ig.log(ig.game.wepWinNum);
        },

        update: function(){
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            
            if(x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y
            && y <= this.pos.y + this.size.y) {
                this.currentAnim = this.anims.highlight;

                if(ig.input.pressed('click')){

                    ig.game.reset();

                    ig.game.loadLevel(LevelMainMenu);
                    this.kill();
                }
            }
            else{
                this.currentAnim = this.anims.idle;
            }  
        },

        draw: function() {
            var font = new ig.Font( 'media/04b03.font.png' );
            var youWin = new ig.Font( 'media/04b03.font.png');

            this.parent();
            font.draw("Try Again?", this.pos.x + 64, this.pos.y + 32, ig.Font.ALIGN.CENTER);

            if(ig.game.endSusNum == ig.game.susWinNum && ig.game.endWepNum == ig.game.wepWinNum){
                youWin.draw("You Win!! Nice Job Detective!", this.pos.x + 64, this.pos.y - 32, ig.Font.ALIGN.CENTER);
            }
            else{
                youWin.draw("The Killer got away. Better Luck Next Time", this.pos.x + 64, this.pos.y - 32, ig.Font.ALIGN.CENTER);
            }
        },


    });
});