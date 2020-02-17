ig.module(
    'game.entities.puzzleBox'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityPuzzleBox = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/TestImage.png',448,320),
        zIndex: 4,
        pos: {x: 32, y: 32},
        init:function(){
            this.addAnim( 'idle', 1, [0]);
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