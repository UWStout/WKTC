ig.module(
    'game.entities.CancelButton'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityCancelButton = ig.Entity.extend({
        zIndex: 5,
        animSheet: new ig.AnimationSheet('media/MoreButtons.png', 128, 64),
        size: {x: 128, y: 64},
        pos: {x: 320, y: 224},
        cancel: false,
        init:function(){
            this.addAnim('idle', 1, [2]);
            this.addAnim('highlight', 1, [3]);

            this.currentAnim = this.anims.idle

        },
        draw: function(){
            var font = new ig.Font( 'media/04b03.font.png' );

            this.parent();
            font.draw("Cancel", this.pos.x + 64, this.pos.y + 32, ig.Font.ALIGN.CENTER);
        },
        update: function(){
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            
            if(x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y
            && y <= this.pos.y + this.size.y) {
                this.currentAnim = this.anims.highlight;

                if(ig.input.pressed('click')){
                    this.cancel = true;
                    ig.game.frozen = false;
                    ig.log(this.cancel);
                }
            }
            else{
                this.currentAnim = this.anims.idle;
            }
        }
    })
})