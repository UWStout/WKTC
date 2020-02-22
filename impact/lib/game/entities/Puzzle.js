ig.module(
    'game.entities.Puzzle'
)
.requires(
    'impact.entity',
)
.defines(function(){
    EntityPuzzle = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/CookiePieces.png', 320, 256),
        piece: 0,
        init:function(){
        this.pos.x = 
        this.addAnim('topLeft',1,[0]);
        this.addAnim('bottomLeft',1,[1]);
        this.addAnim('bottomRight',1,[2]);
        this.addAnim('topRight',1,[3]);
        },

        changeFrame: function(){
            switch(this.piece){
                case 0:
                    this.currentAnim = this.anims.topLeft
                    break;
                case 1:
                    this.currentAnim = this.anims.bottomLeft
                    break;
                case 2:
                    this.currentAnim = this.anims.bottomRight
                    break;
                case 3:
                    this.currentAnim = this.anims.topRight
                    break;
            }
        },
        
        draw:function()
        {
            this.parent();
            var offsetX = ig.game.screen.x;
            var offsetY = ig.game.screen.y;
        },

        update:function()
        {
            if (ig.input.clicked("clicked") )
            {

            }
        }
    })
})
