ig.module(
    'game.entities.matchingCard'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityMatchingCard = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/TestCards.png',64,64),
        zIndex: 5,
        matchNumber: 0,
        coordX: 0,
        coordY: 0,
        size: {x: 64, y: 64},
        pos: {x: 32, y: 32},
        init:function(){
            this.addAnim( 'idle', 1, [6]);
            this.addAnim( 'square1', 1, [0]);
            this.addAnim( 'square2', 1, [1]);
            this.addAnim( 'circle1', 1, [2]);
            this.addAnim( 'circle2', 1, [3]);
            this.addAnim( 'star1', 1, [4]);
            this.addAnim( 'star2', 1, [5]);

            this.currentAnim = this.anims.idle
        },
        draw: function(){
            this.parent();
            var offsetX = ig.game.screen.x;
            var offsetY = ig.game.screen.y;
            this.pos.x = offsetX + 128 + this.coordX * 64;
            this.pos.y = offsetY + 40 + this.coordY * 64;
        },
        update: function(){
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            if(ig.input.pressed('click') && x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y && y <= this.pos.y + this.size.y && this.currentAnim == this.anims.idle){
                switch(this.matchNumber){
                    case 0:
                        this.currentAnim = this.anims.square1
                        break;
                    case 1:
                        this.currentAnim = this.anims.square2
                        break;
                    case 2:
                        this.currentAnim = this.anims.circle1
                        break;
                    case 3:
                        this.currentAnim = this.anims.circle2
                        break;
                    case 4:
                        this.currentAnim = this.anims.star1
                        break;
                    case 5:
                        this.currentAnim = this.anims.star2
                        break;
                }
            }
        }
    })
})