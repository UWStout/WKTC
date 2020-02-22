ig.module(
    'game.entities.HowToPlay'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityHowToPlay = ig.Entity.extend({
        zIndex: 1,
        animSheet: new ig.AnimationSheet('media/GenericButton.png', 256, 32),
        size: {x: 256, y: 32},
        pos: {x: 160, y: 192},
        init:function(){
            this.addAnim('idle', 1, [0]);
            this.addAnim('highlight', 1, [1]);

            this.currentAnim = this.anims.idle

        },
        draw: function(){
            var font = new ig.Font( 'media/04b03.font.png' );

            this.parent();
            font.draw("How To Play", this.pos.x + 128, this.pos.y + 16, ig.Font.ALIGN.CENTER);
        },
        update: function(){
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            
            if(ig.input.pressed('click') && ig.game.displayHowTo == true){
                ig.game.displayHowTo = false;
                ig.log("Kill credits");
            }
            else if(x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y
            && y <= this.pos.y + this.size.y) {
                this.currentAnim = this.anims.highlight;

                if(ig.input.pressed('click') && ig.game.displayHowTo == false){
                    ig.game.displayHowTo = true;
                }
            }
            else{
                this.currentAnim = this.anims.idle;
            }
        }
    })
})