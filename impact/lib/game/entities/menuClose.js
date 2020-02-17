ig.module(
	'game.entities.menuClose'
)
.requires(
    'impact.entity',
    'impact.debug.debug',
    'game.entities.puzzleBox'
)
.defines(function()
{
EntityMenuClose = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media /Cross.png',32,32),
    pos: {x: 32, y: 32},
    size: {x: 32, y: 32},
    zIndex: 5,
    init: function(){
        this.addAnim( 'idle', 1, [0]);

        //ig.log("I spawned")
        ig.game.spawnEntity(EntityHighlight, this.pos.x, this.pos.y);

    },
    update: function() {
        if(ig.input.state('click') && ig.input.mouse.x > 480 && ig.input.mouse.x < 512 && ig.input.mouse.y > 32 && ig.input.mouse.y < 64)
        {
            {
                ig.log("Close");
                var puzzleBox = ig.game.getEntitiesByType(EntityPuzzleBox)[0];
                ig.game.puzzleOn = false;
                //ig.game.puzzleBox = !ig.game.puzzleBox;
                puzzleBox.kill();
                this.kill();
                
            }
        }
    },
    draw: function()
    {
        this.parent();
        var offsetX = ig.game.screen.x;
        var offsetY = ig.game.screen.y;
        this.pos.x = offsetX + 480;
        this.pos.y = offsetY + 32;
    }
})
})