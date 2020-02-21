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

            
            
        },
        update: function(){
            x = (ig.input.mouse.x + ig.game.screen.x);
            y = (ig.input.mouse.y + ig.game.screen.y);

            if(ig.input.pressed('click') && x >= this.pos.x && x <= this.pos.x + this.size.x && y >= this.pos.y && y <= this.pos.y + this.size.y){
                this.changeSuspect();
            }
        }
    })
})