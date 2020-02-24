ig.module(
    'game.entities.susEvidence'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntitySusEvidence = ig.Entity.extend({
        // Set up Collision properties
        size: {x:32,y:32},
        animSheet: new ig.AnimationSheet('media /EvidenceUI.png',32,32),
        showText: false,
        zIndex: 10,
        pos: {x:320, y: 32},
        // Establish Animations and drawing the Hud
        init: function(x, y , settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
            this.addAnim('found',1,[1]);

            this.currentAnim = this.anims.idle;
        },

        update: function(){
            // If we solve the dial puzzle, mark this evidence as found
            if(ig.game.dialSolved){
                this.currentAnim = this.anims.found;
            }
            // Track the mouse
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            // If the player hovers over the entity, show the text correlating to evidence
            if(x >= this.pos.x  && x <= this.pos.x + this.size.x && y >= this.pos.y
            && y <= this.pos.y + this.size.y) {
                this.showText = true;
            }
            else{
                this.showText = false;
            }
            
            this.parent();

        },

        draw: function(){
            this.parent();
            // Offsets for the text and Hud position
            var offsetX = ig.game.screen.x;
            var offsetY = ig.game.screen.y;
            this.pos.x = offsetX + 448;
            this.pos.y = offsetY + 32;

            if(this.showText){
                var font = new ig.Font( 'media/04b03.font.png' );
                // If the dial puzzle is solved, update the text to be evidence
                if(ig.game.dialSolved){
                    switch(ig.game.susWinNum) {
                        case 0:
                            font.draw("Frosting Trail", 416, 64, ig.Font.ALIGN.LEFT)
                            break;
                        case 1:
                            font.draw("Salt Trail", 416, 64, ig.Font.ALIGN.LEFT)
                            break;
                        case 2:
                            font.draw("Coffee Trail", 416, 64, ig.Font.ALIGN.LEFT)
                            break;
                        case 3:
                            font.draw("Red Crumbs", 416, 64, ig.Font.ALIGN.LEFT);
                            break;
                    }
                }
                else{
                    font.draw("Evidence Not Found", 416, 64, ig.Font.ALIGN.LEFT) 
                }
            }
        }


    });
});