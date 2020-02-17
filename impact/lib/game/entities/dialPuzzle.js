ig.module(
    'game.entities.dialPuzzle'
)
.requires(
    'impact.entity',
)
.defines(function(){
    EntityDial = ig.Entity.extend({

        animsheet: new ig.AnimationSheet('media/Dials.png', 320, 256),
        init:function(){
            this.addAnim('zeroTop',1,[0]);
            this.addAnim('twoTop',1,[1]);
            this.addAnim('threeTop',1,[2]);
            this.addAnim('fiveTop',1,[3]);
            this.addAnim('sevenTop',1,[4]);
        }

    });
});