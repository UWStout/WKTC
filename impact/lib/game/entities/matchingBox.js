ig.module(
    'game.entities.matchingBox'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityMatchingBox = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/BasicBackground.png',448,320),
        zIndex: 4,
        pos: {x: 32, y: 32},
        init:function(){
            this.addAnim( 'idle', 1, [0]);
            ig.game.currentPuzzle = this;
        },
        draw: function(){
            this.parent();
            var offsetX = ig.game.screen.x;
            var offsetY = ig.game.screen.y;
            this.pos.x = offsetX + 64;
            this.pos.y = offsetY + 32;
        }
    })
})