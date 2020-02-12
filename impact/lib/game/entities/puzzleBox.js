ig.module(
    'game.entities.puzzleBox'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntityPuzzleBox = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media /TestImage.png',320,192),
        zIndex: 4,
        pos: {x: 32, y: 32},
        init:function(){
            this.pos.x = 20;
            this.pos.y = 20;
            this.addAnim( 'idle', 1, [0]);
        }
    })
})