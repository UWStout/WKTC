ig.module(
    'game.entities.DragPuzzle'
)
.requires(
    'impact.entity',
)
.defines(function(){
    EntityDragPuzzle = ig.Entity.extend({

        animSheet: new ig.AnimationSheet('media/CookiePieces.png', 80, 128),
        placeOffset: 30,
        arrayIndex: 0,

        init:function()
        {
            this.addAnim('TopLeft',1,[0]);
            this.addAnim('BottomLeft',1,[1]);
            this.addAnim('BottomRight',1,[2]);
            this.addAnim('TopRight',1,[3]);
            switch(this.arrayIndex)
            {
                case 0:
                {
                    this.currentAnim = this.anims.TopLeft;
                    break;
                }
                case 1:
                {
                    this.currentAnim = this.anims.BottomLeft;
                    break;
                }
                case 2:
                {
                    this.currentAnim = this.anims.BottomRight;
                    break;
                }
                case 3:
                {
                    this.currentAnim = this.anims.TopRight;
                    break;
                }
            }
        },
        update: function()
        {
            if (ig.input.clicked('clicked'))
            {
                this.pos.x = ig.input.mouse.x;
                this.pos.y = ig.input.mouse.y; 
            }
        }
        /*
        TO ADD CHECK, ANALYZE THE LOCATIONS OF THE PIECES AND ASSORT THEM IN A 2x2 SQUARE
        */
    })
});