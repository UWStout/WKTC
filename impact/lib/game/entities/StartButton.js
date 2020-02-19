ig.module(
    'game.entities.StartButton'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityStartButton = ig.Entity.extend({
        zIndex: 1,
        animSheet: new ig.AnimationSheet('media/GenericButton.png', 256, 32),
        size: {x: 256, y: 32},
        pos: {x: 160, y: 128},
        init:function(){
            this.addAnim('idle', 1, [0]);
            this.addAnim('highlight', 1, [1]);

            this.currentAnim = this.anims.idle

        },
        draw: function(){
            var font = new ig.Font( 'media/04b03.font.png' );

            this.parent();
            font.draw("Start Game", this.pos.x + 128, this.pos.y + 16, ig.Font.ALIGN.CENTER);
        },
        update: function(){
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            if(x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y
            && y <= this.pos.y + this.size.y) {
                this.currentAnim = this.anims.highlight;

                if(ig.input.pressed('click')){
                    ig.game.loadLevel( LevelMain );
                }
            }
            else{
                this.currentAnim = this.anims.idle;
            }
        }
    })
})