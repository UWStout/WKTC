ig.module(
    'game.entities.SuspectUI'
)
.requires(
    'impact.entity',
)
.defines(function(){
   
    EntitySuspectUI = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/Suspects.png',64,64),
        zIndex: 5,
        susNumber: 0,
        coordX: 0,
        coordY: 0,
        size: {x: 64, y: 64},
        pos: {x: 32, y: 32},
        
        // Cycle through the list of suspects
        changeSuspect: function(){
            this.susNumber++
            if(this.susNumber > 3){
                this.susNumber = 0;
            }
            switch(this.susNumber){
                case 0:
                    this.currentAnim = this.anims.sus1
                    break;
                case 1:
                    this.currentAnim = this.anims.sus2
                    break;
                case 2:
                    this.currentAnim = this.anims.sus3
                    break;
                case 3:
                    this.currentAnim = this.anims.sus4
                    break;
            }
        },
        init:function(){
            // Establish animations for the entity
            this.addAnim( 'sus1', 1, [0]);
            this.addAnim( 'sus2', 1, [1]);
            this.addAnim( 'sus3', 1, [2]);
            this.addAnim( 'sus4', 1, [3]);

            this.currentAnim = this.anims.sus1

            ig.log('I Spawned');
            ig.log(this.pos)

            this.pos.x = 240;
            this.pos.y = 128;
        },
        draw: function(){
            this.parent();

            //Create a font base off the suspect and weapon selected
            var susSelect =  new ig.Font( 'media/04b03.font.png' )
            var wepSelect =  new ig.Font( 'media/04b03.font.png' )

            switch(this.susNumber){
                case 0:
                    susSelect.draw("Sugar Cookie", this.pos.x, this.pos.y + 72, ig.Font.ALIGN.LEFT)
                    break;
                case 1:
                    susSelect.draw("Salted Caramel", this.pos.x, this.pos.y + 72, ig.Font.ALIGN.LEFT)
                    break;
                case 2:
                    susSelect.draw("Coffee Toffee", this.pos.x, this.pos.y + 72, ig.Font.ALIGN.LEFT)
                    break;
                case 3:
                    susSelect.draw("Red Velvet", this.pos.x, this.pos.y + 72, ig.Font.ALIGN.LEFT)
                    break;
            }
            
        },
        update: function(){
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);
            // If clicked on the entity, cycle through the array of suspects
            if(ig.input.pressed('click') && x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y && y <= this.pos.y + this.size.y){
                this.changeSuspect();
            }
        }
    })
})