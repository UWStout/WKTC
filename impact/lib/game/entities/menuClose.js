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
        //ig.game.spawnEntity(EntityHighlight, this.pos.x, this.pos.y);

    },
    update: function() {
        if(ig.input.state('click') && ig.input.mouse.x > 480 && ig.input.mouse.x < 512 && ig.input.mouse.y > 32 && ig.input.mouse.y < 64)
        {
            {
                ig.log("Close");
                var puzzleBox = ig.game.currentPuzzle;
                ig.game.puzzleOn = false;
                ig.game.matchingOn = false;
                ig.game.dialPuzzle = false;
                ig.game.frozen = false;
                //ig.game.puzzleBox = !ig.game.puzzleBox;
                var cards = ig.game.getEntitiesByType(EntityMatchingCard)
                for(var i = 0; i < cards.length; i++){
                    cards[i].kill();
                }
                var dial = ig.game.getEntitiesByType(EntityDialPuzzle);
                for (var j = 0; j < dial.length; j++)
                {
                    dial[j].kill();
                }
                puzzleBox.kill();
                this.kill();
                
            }
        }

        if(ig.game.closeWindow == true){
            this.kill();
            ig.game.closeWindow = false;
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